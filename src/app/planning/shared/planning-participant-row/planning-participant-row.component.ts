import { Component, Input, OnInit } from '@angular/core';
import { PlanningCardMapper } from 'src/app/mapper/planning-card-mapper';
import { PlanningParticipant } from 'src/app/models/planning-participant';
import { PlanningTicket } from 'src/app/models/planning-ticket';

@Component({
  selector: 'app-planning-participant-row',
  templateUrl: './planning-participant-row.component.html',
  styleUrls: ['./planning-participant-row.component.scss']
})
export class PlanningParticipantRowComponent implements OnInit {
  @Input() ticket: PlanningTicket | undefined
  @Input() participant: PlanningParticipant | undefined
  @Input() isVotingState: boolean = false
  @Input() isFinishedVotingState: boolean = false
  @Input() showDownArrowIcon: boolean = false
  
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
    if (vote?.selectedCard == null) {
      return undefined
    }
    return new PlanningCardMapper().cardValue(vote!.selectedCard)
  }
}
