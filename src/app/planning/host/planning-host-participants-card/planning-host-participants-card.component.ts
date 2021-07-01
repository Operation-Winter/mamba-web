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

  onClickSkipVote(participantId: string) {
    this.didTapSkipVote.emit(participantId)
  }

  onClickRemoveParticipant(participantId: string) {
    this.didTapRemoveParticipant.emit(participantId)
  }
}
