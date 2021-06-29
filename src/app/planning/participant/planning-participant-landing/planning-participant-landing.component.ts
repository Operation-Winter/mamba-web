import { Component, Input, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Subscription } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { PlanningParticipantCommandMapper } from 'src/app/mapper/planning-participant-command-mapper';
import { PlanningSessionStateMessage } from 'src/app/models/messages/planning-session-state-message';
import { PlanningCommandParticipantReceive } from 'src/app/models/participant/planning-command-participant-receive';
import { PlanningCommandParticipantReceiveType } from 'src/app/models/participant/planning-command-participant-receive-type.enum';
import { PlanningCommandParticipantSend } from 'src/app/models/participant/planning-command-participant-send';
import { PlanningCard } from 'src/app/models/planning-card.enum';
import { PlanningParticipant } from 'src/app/models/planning-participant';
import { PlanningSessionState } from 'src/app/models/planning-session-state.enum';
import { PlanningTicket } from 'src/app/models/planning-ticket';

@Component({
  selector: 'app-planning-participant-landing',
  templateUrl: './planning-participant-landing.component.html',
  styleUrls: ['./planning-participant-landing.component.scss']
})
export class PlanningParticipantLandingComponent implements OnInit {
  participantCommandMapper = new PlanningParticipantCommandMapper()

  webSocketSubject = webSocket({
    binaryType: 'arraybuffer',
    url: 'ws://localhost:8080/planning/join',
    serializer: (msg: Uint8Array) => {
      const offset = msg.byteOffset;
      const length = msg.byteLength;
      return msg.buffer.slice(offset, offset + length);
    },
    deserializer: msg => new Uint8Array(msg.data as ArrayBuffer)
  })
  subscription: Subscription

  uuid = UUID.UUID()

  @Input() userName: string = ""
  @Input() sessionCode: string = ""

  state = PlanningSessionState.none
  sessionName: string = ""
  availableCards: PlanningCard[] = []
  participants: PlanningParticipant[] = []
  ticket: PlanningTicket | undefined

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

  get isParticipantRemovedState() {
    return this.state == PlanningSessionState.removeParticipant
  }

  get isInvalidSessionState() {
    return this.state == PlanningSessionState.invalidSession
  }

  get isParticipantLeftState() {
    return this.state == PlanningSessionState.participantLeft
  }

  constructor() {
    this.subscription = this.webSocketSubject.subscribe(
      msg => {
        let jsonObject = JSON.parse(new TextDecoder().decode(msg))
        let incomingCommand = this.participantCommandMapper.mapIncomingCommand(jsonObject)
        this.execute(incomingCommand)
      },
      err => console.log(err),
      () => {
        if (this.state != PlanningSessionState.error && this.state != PlanningSessionState.invalidSession 
          && this.state != PlanningSessionState.participantLeft && this.state != PlanningSessionState.removeParticipant)
          this.state = PlanningSessionState.sessionEnded
      }
    )
  }

  ngOnInit() {
    var command = this.participantCommandMapper.mapJoinSessionCommand(this.uuid, this.sessionCode, this.userName)
    this.sendCommand(command)
  }

  sendCommand(command: PlanningCommandParticipantSend) {
    console.log("WebSocket send data: ", command)
    let encodedCommand = new TextEncoder().encode(JSON.stringify(command))
    this.webSocketSubject.next(encodedCommand)
  }

  onClickLeaveSession() {
    var command = this.participantCommandMapper.mapLeaveSessionCommand(this.uuid)
    this.sendCommand(command)
    this.state = PlanningSessionState.participantLeft
  }

  onClickVote(card: PlanningCard) {
    var command = this.participantCommandMapper.mapVoteCommand(this.uuid, card)
    this.sendCommand(command)
  }

  execute(command: PlanningCommandParticipantReceive) {
    console.log('message received: ', command)
    switch (command.type) {
      case PlanningCommandParticipantReceiveType.noneState:
        this.state = PlanningSessionState.none
        this.assignStateMessage(command.message as PlanningSessionStateMessage)
        break
      case PlanningCommandParticipantReceiveType.votingState:
        this.state = PlanningSessionState.voting
        this.assignStateMessage(command.message as PlanningSessionStateMessage)
        break
      case PlanningCommandParticipantReceiveType.finishedState:
        this.state = PlanningSessionState.finishedVoting
        this.assignStateMessage(command.message as PlanningSessionStateMessage)
        break
      case PlanningCommandParticipantReceiveType.invalidCommand:
        this.state = PlanningSessionState.error
        break
      case PlanningCommandParticipantReceiveType.endSession:
        this.state = PlanningSessionState.sessionEnded
        break
      case PlanningCommandParticipantReceiveType.removeParticipant:
        this.state = PlanningSessionState.removeParticipant
        break
      case PlanningCommandParticipantReceiveType.invalidSession:
        this.state = PlanningSessionState.invalidSession
        break
    }
  }

  assignStateMessage(stateMessage: PlanningSessionStateMessage) {
    this.sessionName = stateMessage.sessionName
    this.sessionCode = stateMessage.sessionCode
    this.participants = stateMessage.participants
    this.ticket = stateMessage.ticket
    this.availableCards = stateMessage.availableCards
  }
}
