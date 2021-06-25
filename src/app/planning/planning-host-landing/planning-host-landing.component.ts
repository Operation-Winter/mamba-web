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
import { PlanningCardMapper } from 'src/app/mapper/planning-card-mapper';

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
  @Input() availableCards: PlanningCard[] = []

  ticketTitle: string = ""
  ticketDescription: string = ""

  state = PlanningSessionState.none
  sessionCode: string = ""
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

  constructor(public dialog: MatDialog) {
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
    const dialogRef = this.dialog.open(AddTicketDialogComponent, {
      minWidth: '400px',
      maxWidth: '600px',
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

  votingIcon(participantId: string): string {
    let vote = this.ticket?.ticketVotes.filter(vote => vote.participantId == participantId)[0]

    if (vote == null) {
      return "more_horiz"
    } if (vote?.selectedCard == null) {
      return "shortcut"
    } else {
      return "check_circle_outline"
    }
  }

  votingValue(participantId: string): string | undefined {
    let vote = this.ticket?.ticketVotes.filter(vote => vote.participantId == participantId)[0]
    return new PlanningCardMapper().cardValue(vote!.selectedCard)
  }

  execute(command: PlanningCommandHostReceive) {
    console.log('message received: ', command)
    switch (command.type) {
      case PlanningCommandHostReceiveType.noneState:
        this.state = PlanningSessionState.none
        this.assignStateMessage(command.message as PlanningSessionStateMessage)
        break
      case PlanningCommandHostReceiveType.votingState:
        this.state = PlanningSessionState.voting
        this.assignStateMessage(command.message as PlanningSessionStateMessage)
        break
      case PlanningCommandHostReceiveType.finishedState:
        this.state = PlanningSessionState.finishedVoting
        this.assignStateMessage(command.message as PlanningSessionStateMessage)
        break
      case PlanningCommandHostReceiveType.invalidCommand:
        this.state = PlanningSessionState.error
        break
    }
  }

  assignStateMessage(stateMessage: PlanningSessionStateMessage) {
    this.sessionCode = stateMessage.sessionCode
    this.participants = stateMessage.participants
    this.ticket = stateMessage.ticket
  }
}
