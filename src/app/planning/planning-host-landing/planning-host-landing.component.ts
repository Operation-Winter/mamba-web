import { Component, Input, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { Subscription } from 'rxjs';
import { UUID } from 'angular2-uuid';
import { PlanningCommandHostSend } from 'src/app/models/host/planning-command-host-send';
import { PlanningHostCommandMapper } from 'src/app/mapper/planning-host-command-mapper';
import { PlanningCard } from 'src/app/models/planning-card.enum';
import { PlanningCommandHostReceive } from 'src/app/models/host/planning-command-host-receive';
import { PlanningCommandHostReceiveType } from 'src/app/models/host/planning-command-host-receive-type.enum';
import { PlanningSessionState } from 'src/app/models/planning-session-state.enum';
import { PlanningSessionStateMessage } from 'src/app/models/messages/planning-session-state-message';
import { PlanningParticipant } from 'src/app/models/planning-participant';

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

  state = PlanningSessionState.none
  sessionCode: string = ""
  participants: PlanningParticipant[] = []

  get isNoneState() {
    return this.state == PlanningSessionState.none
  }

  get isVotingState() {
    return this.state == PlanningSessionState.voting
  }

  get isFinishedVotingState() {
    return this.state == PlanningSessionState.finishedVoting
  }

  get isErrorState() {
    return this.state == PlanningSessionState.error
  }

  get isSessionEndedState() {
    return this.state == PlanningSessionState.sessionEnded
  }

  constructor() {
    this.subscription = this.webSocketSubject.subscribe(
      msg => {
        let jsonObject = JSON.parse(new TextDecoder().decode(msg))
        let incomingCommand = this.hostCommandMapper.mapIncomingCommand(jsonObject)
        this.execute(incomingCommand)
      },
      err => console.log(err),
      () => this.state = PlanningSessionState.sessionEnded
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

  onClickFinishVoting() {
    var command = this.hostCommandMapper.mapFinishVotingCommand(this.uuid)
    this.sendCommand(command)
  }

  onClickEndSession() {
    var command = this.hostCommandMapper.mapEndSessionCommand(this.uuid)
    this.sendCommand(command)
  }

  execute(command: PlanningCommandHostReceive) {
    console.log('message received: ', command)
    switch (command.type) {
      case PlanningCommandHostReceiveType.noneState:
        this.state = PlanningSessionState.none
        var stateMessage = command.message as PlanningSessionStateMessage
        this.sessionCode = stateMessage.sessionCode
        this.participants = stateMessage.participants
        break
      case PlanningCommandHostReceiveType.votingState:
        this.state = PlanningSessionState.voting
        break
      case PlanningCommandHostReceiveType.finishedState:
        this.state = PlanningSessionState.finishedVoting
        break
      case PlanningCommandHostReceiveType.invalidCommand:
        this.state = PlanningSessionState.error
        break
    }
  }
}
