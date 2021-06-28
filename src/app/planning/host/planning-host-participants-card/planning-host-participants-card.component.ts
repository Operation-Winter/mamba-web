import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanningCardMapper } from 'src/app/mapper/planning-card-mapper';
import { PlanningParticipant } from 'src/app/models/planning-participant';
import { PlanningTicket } from 'src/app/models/planning-ticket';

@Component({
  selector: 'app-planning-host-participants-card',
  templateUrl: './planning-host-participants-card.component.html',
  styleUrls: ['./planning-host-participants-card.component.scss']
})
export class PlanningHostParticipantsCardComponent implements OnInit {

  @Input() ticket: PlanningTicket | undefined
  @Input() participants: PlanningParticipant[] = []
  @Input() isVotingState: boolean = false
  @Input() isFinishedVotingState: boolean = false
  @Output() didTapSkipVote = new EventEmitter<string>()
  @Output() didTapRemoveParticipant = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
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

  onClickSkipVote(participantId: string) {
    this.didTapSkipVote.emit(participantId)
  }

  onClickRemoveParticipant(participantId: string) {
    this.didTapRemoveParticipant.emit(participantId)
  }
}
