import { Component, Input, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { Subscription } from 'rxjs';
import { UUID } from 'angular2-uuid';
import { PlanningCommandHostSend } from 'src/app/models/planning-command-host-send';
import { PlanningHostCommandMapper } from 'src/app/mapper/planning-host-command-mapper';
import { PlanningCard } from 'src/app/models/planning-card.enum';

@Component({
  selector: 'app-planning-host-landing',
  templateUrl: './planning-host-landing.component.html',
  styleUrls: ['./planning-host-landing.component.scss']
})
export class PlanningHostLandingComponent implements OnInit {
  webSocketSubject = webSocket({
    binaryType: 'arraybuffer',
    url: 'ws://localhost:8080/planning/host', 
    serializer: (msg: Uint8Array) => {
      const offset = msg.byteOffset;
      const length = msg.byteLength;
      return msg.buffer.slice(offset, offset + length);
    },
    deserializer: msg => new Uint8Array(msg.data as ArrayBuffer)
  })
  subscription: Subscription
  chardata: any[] = []
  chartOptions: any
  uuid = UUID.UUID()
  @Input() sessionName: String = ""
  @Input() userName: String = ""
  @Input() availableCards: PlanningCard[] = []
  hostCommandMapper = new PlanningHostCommandMapper()

  constructor() {
    this.subscription = this.webSocketSubject.subscribe(
      msg => console.log('message received: ' + new TextDecoder().decode(msg)), // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    )
  }

  ngOnInit() {
    var command = this.hostCommandMapper.mapStartSessionCommand(this.uuid, this.sessionName, this.availableCards)
    this.sendCommand(command)
  }

  sendCommand(command: PlanningCommandHostSend) {
    console.log("WebSocket send data: ", command)
    let encodedCommand = new TextEncoder().encode(JSON.stringify(command))
    this.webSocketSubject.next(encodedCommand)
  }
}
