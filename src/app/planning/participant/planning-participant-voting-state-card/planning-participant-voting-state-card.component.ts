import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanningCard } from 'src/app/models/planning-card.enum';

@Component({
  selector: 'app-planning-participant-voting-state-card',
  templateUrl: './planning-participant-voting-state-card.component.html',
  styleUrls: ['./planning-participant-voting-state-card.component.scss']
})
export class PlanningParticipantVotingStateCardComponent implements OnInit {
  @Input() availableCards: PlanningCard[] = []
  @Output() didTapPlanningCard = new EventEmitter<PlanningCard>()

  constructor() { }

  ngOnInit() {
  }

  onClickPlanningCard(planningCard: PlanningCard) {
    this.didTapPlanningCard.emit(planningCard)
  }
}
