import { Component, OnInit } from '@angular/core';
import { PlanningCard } from 'src/app/models/planning-card.enum';

@Component({
  selector: 'app-planning-host',
  templateUrl: './planning-host.component.html',
  styleUrls: ['./planning-host.component.scss']
})
export class PlanningHostComponent implements OnInit {
  selectedAvailableCards: string[] = [
    PlanningCard.zero,
    PlanningCard.one,
    PlanningCard.two,
    PlanningCard.three,
    PlanningCard.five,
    PlanningCard.eight,
    PlanningCard.thirteen,
    PlanningCard.twenty,
    PlanningCard.fourty,
    PlanningCard.hundred,
    PlanningCard.coffee,
    PlanningCard.question
  ] as string[]

  get availableCards() {
    return this.selectedAvailableCards.map( key => key as PlanningCard )
  }
  sessionName: string = ""
  userName: string = ""
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
