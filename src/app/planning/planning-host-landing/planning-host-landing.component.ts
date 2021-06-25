import { Component, Input, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { Subscription } from 'rxjs';
import { UUID } from 'angular2-uuid';
import { PlanningCommandHostSend } from 'src/app/models/host/planning-command-host-send';
import { PlanningHostCommandMapper } from 'src/app/mapper/planning-host-command-mapper';
import { PlanningCard } from 'src/app/models/planning-card.enum';

@Component({
  selector: 'app-planning-host-landing',
  templateUrl: './planning-host-landing.component.html',
  styleUrls: ['./planning-host-landing.component.scss']
})
export class PlanningHostLandingComponent implements OnInit {
  hostCommandMapper = new PlanningHostCommandMapper()

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
  
  uuid = UUID.UUID()
  @Input() sessionName: string = ""
  @Input() userName: string = ""
  @Input() availableCards: PlanningCard[] = []
  
  ticketTitle: string = ""
  ticketDescription: string = ""

  constructor() {
    this.subscription = this.webSocketSubject.subscribe(
      msg => {
        let jsonObject = JSON.parse(new TextDecoder().decode(msg))
        let incomingCommand = this.hostCommandMapper.mapIncomingCommand(jsonObject)
        console.log('message received: ', jsonObject, incomingCommand)
      },
      err => console.log(err),
      () => console.log('complete')
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

  onClickAddTicket() {
    var command = this.hostCommandMapper.mapAddTicketCommand(this.uuid, this.ticketTitle, this.ticketDescription)
    this.sendCommand(command)
  }
}
