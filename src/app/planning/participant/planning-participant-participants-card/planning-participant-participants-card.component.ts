import { Component, Input, OnInit } from '@angular/core';
import { PlanningParticipant } from 'src/app/models/planning-participant';
import { PlanningTicket } from 'src/app/models/planning-ticket';

@Component({
  selector: 'app-planning-participant-participants-card',
  templateUrl: './planning-participant-participants-card.component.html',
  styleUrls: ['./planning-participant-participants-card.component.scss']
})
export class PlanningParticipantParticipantsCardComponent implements OnInit {
  @Input() ticket: PlanningTicket | undefined
  @Input() participants: PlanningParticipant[] = []
  @Input() isFinishedVotingState: boolean = false

  constructor() { }

  ngOnInit() {
  }
}
