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
import { PlanningTicket } from 'src/app/models/planning-ticket';
import { PlanningAddTicketMessage } from 'src/app/models/messages/planning-add-ticket-message';
import { AddTicketDialogComponent } from '../add-ticket-dialog/add-ticket-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { PlanningPartitipantsMapper } from 'src/app/mapper/planning-partitipants-mapper';

@Component({
  selector: 'app-planning-host-landing',
  templateUrl: './planning-host-landing.component.html',
  styleUrls: ['./planning-host-landing.component.scss']
})
export class PlanningHostLandingComponent implements OnInit {
  hostCommandMapper = new PlanningHostCommandMapper()

  webSocketSubject = webSocket({
    binaryType: 'arraybuffer',
    url: environment.baseApiURL + '/planning/host',
    serializer: (msg: Uint8Array) => {
      const offset = msg.byteOffset;
      const length = msg.byteLength;
      return msg.buffer.slice(offset, offset + length);
    },
    deserializer: msg => new Uint8Array(msg.data as ArrayBuffer)
  })
  subscription: Subscription | undefined

  get uuid(): string {
    var tempUUID = this.hostUUID

    if (tempUUID == null) {
      tempUUID = this.sessionUUID
    }
    if (tempUUID == null) {
      tempUUID = UUID.UUID().toUpperCase()
      this.hostUUID = tempUUID
      sessionStorage.setItem('hostUUID', tempUUID)
    }
    return tempUUID
  }

  get sessionUUID() {
    return sessionStorage.getItem('hostUUID')
  }

  @Input() sessionName: string = ""
  @Input() availableCards: PlanningCard[] = []
  @Input() reconnect: boolean = false
  @Input() autoCompleteVoting: boolean = true

  hostUUID: string | null = null
  state = PlanningSessionState.none
  sessionCode: string = ""
  participants: PlanningParticipant[] = []
  ticket: PlanningTicket | undefined
  retryCount = 0

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

  constructor(public dialog: MatDialog) {
    this.connect()
  }

  connect() {
    this.subscription = this.webSocketSubject.subscribe(
      msg => {
        let jsonObject = JSON.parse(new TextDecoder().decode(msg))
        let incomingCommand = this.hostCommandMapper.mapIncomingCommand(jsonObject)
        this.execute(incomingCommand)
      },
      err => {
        this.state = PlanningSessionState.error
        console.log(err)
      },
      () => this.handleSocketClosure()
    )
  }

  handleSocketClosure() {
    switch (this.state) {
      case PlanningSessionState.none:
      case PlanningSessionState.voting:
      case PlanningSessionState.finishedVoting:
      case PlanningSessionState.error:
        this.tryReconnect()
        break
      default:
        break
    }
  }

  tryReconnect() {
    this.retryCount += 1

    if (this.retryCount > 3) {
      this.state = PlanningSessionState.error
    } else {
      this.connect()
      this.sendCommand(this.hostCommandMapper.mapReconnectCommand(this.uuid))
    }
  }

  ngOnInit() {
    if (this.reconnect) {
      var command = this.hostCommandMapper.mapReconnectCommand(this.uuid)
      this.sendCommand(command)
    } else {
      var command = this.hostCommandMapper.mapStartSessionCommand(this.uuid, this.sessionName, this.autoCompleteVoting, this.availableCards)
      this.sendCommand(command)
    }
  }

  sendCommand(command: PlanningCommandHostSend) {
    console.log("WebSocket send data: ", command)
    let encodedCommand = new TextEncoder().encode(JSON.stringify(command))
    this.webSocketSubject.next(encodedCommand)
  }

  onClickAddTicket() {
    const dialogRef = this.dialog.open(AddTicketDialogComponent, {
      minWidth: '400px',
      maxWidth: '800px',
      data: new PlanningAddTicketMessage("", "")
    })

    dialogRef.afterClosed().subscribe(result => {
      var command = this.hostCommandMapper.mapAddTicketCommand(this.uuid, result.title, result.description)
      this.sendCommand(command)
    })
  }

  onClickFinishVoting() {
    var command = this.hostCommandMapper.mapFinishVotingCommand(this.uuid)
    this.sendCommand(command)
  }

  onClickEndSession() {
    var command = this.hostCommandMapper.mapEndSessionCommand(this.uuid)
    this.resetUUID()
    this.sendCommand(command)
  }

  onClickRevote() {
    var command = this.hostCommandMapper.mapRevoteCommand(this.uuid)
    this.sendCommand(command)
  }

  onClickSkipVote(participantId: string) {
    var command = this.hostCommandMapper.mapSkipVoteCommand(this.uuid, participantId)
    this.sendCommand(command)
  }

  onClickRemoveParticipant(participantId: string) {
    var command = this.hostCommandMapper.mapRemoveParticipantCommand(this.uuid, participantId)
    this.sendCommand(command)
  }

  execute(command: PlanningCommandHostReceive) {
    console.log('message received: ', command)
    switch (command.type) {
      case PlanningCommandHostReceiveType.noneState:
        this.state = PlanningSessionState.none
        this.assignStateMessage(command.message as PlanningSessionStateMessage, false)
        break
      case PlanningCommandHostReceiveType.votingState:
        this.state = PlanningSessionState.voting
        this.assignStateMessage(command.message as PlanningSessionStateMessage, false)
        break
      case PlanningCommandHostReceiveType.finishedState:
        this.state = PlanningSessionState.finishedVoting
        this.assignStateMessage(command.message as PlanningSessionStateMessage, true)
        break
      case PlanningCommandHostReceiveType.invalidCommand:
        this.state = PlanningSessionState.error
        break
    }
  }

  assignStateMessage(stateMessage: PlanningSessionStateMessage, sortParticipants: boolean) {
    this.sessionName = stateMessage.sessionName
    this.sessionCode = stateMessage.sessionCode
    this.ticket = stateMessage.ticket
    this.participants = sortParticipants
      ? PlanningPartitipantsMapper.sortedPartitipantsRows(stateMessage.ticket?.ticketVotes, stateMessage.participants)
      : stateMessage.participants
  }

  resetUUID() {
    sessionStorage.removeItem('hostUUID')
  }
}
