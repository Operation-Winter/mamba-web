import { Component, Input, OnInit } from '@angular/core';
import { PlanningTicketVote } from 'src/app/models/planning-ticket-vote';

@Component({
  selector: 'app-planning-voting-results-card',
  templateUrl: './planning-voting-results-card.component.html',
  styleUrls: ['./planning-voting-results-card.component.scss']
})
export class PlanningVotingResultsCardComponent implements OnInit {
  @Input() votes: PlanningTicketVote[] = []

  constructor() { }

  ngOnInit() {
  }

}
