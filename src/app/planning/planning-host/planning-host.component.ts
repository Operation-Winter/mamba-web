import { Component, OnInit } from '@angular/core';
import { PlanningCardMapper } from 'src/app/mapper/planning-card-mapper';
import { PlanningCard } from 'src/app/models/planning-card.enum';

@Component({
  selector: 'app-planning-host',
  templateUrl: './planning-host.component.html',
  styleUrls: ['./planning-host.component.scss']
})
export class PlanningHostComponent implements OnInit {
  selectedAvailableCards: string[] = new PlanningCardMapper().allCases as string[]

  get availableCards() {
    return this.selectedAvailableCards.map( key => key as PlanningCard )
  }
  sessionName: string = ""
  sessionStarted: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  didTapStartSession() {
    this.sessionStarted = true
  }

  updateSelectedAvailableCards(availableCards: string[]) {
    this.selectedAvailableCards = availableCards
  }
}
