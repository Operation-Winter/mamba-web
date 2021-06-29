import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanningCardMapper } from 'src/app/mapper/planning-card-mapper';
import { PlanningCard } from 'src/app/models/planning-card.enum';

@Component({
  selector: 'app-planning-participant-voting-state-card',
  templateUrl: './planning-participant-voting-state-card.component.html',
  styleUrls: ['./planning-participant-voting-state-card.component.scss']
})
export class PlanningParticipantVotingStateCardComponent implements OnInit {
  @Input() availableCards: PlanningCard[] = []
  @Output() didTapPlanningCard = new EventEmitter<PlanningCard>()
  
  selectedCard: PlanningCard | undefined
  planningCardMapper = new PlanningCardMapper()

  constructor() { }

  ngOnInit() {
  }

  isSelected(planningCard: PlanningCard): boolean {
    return planningCard == this.selectedCard
  }

  onClickPlanningCard(planningCard: PlanningCard) {
    this.selectedCard = planningCard
    this.didTapPlanningCard.emit(planningCard)
  }

  planningCardImagePath(planningCard: PlanningCard): string {
    return this.planningCardMapper.imageAssetPath(planningCard)
  }
}
