import { Component, OnInit } from '@angular/core';
import { PlanningCard } from 'src/app/models/planning-card';

@Component({
  selector: 'app-planning-host',
  templateUrl: './planning-host.component.html',
  styleUrls: ['./planning-host.component.scss']
})
export class PlanningHostComponent implements OnInit {
  availableCards: PlanningCard[] = [
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
  ]

  selectedAvailableCards: String[] = this.availableCards as String[]

  constructor() { }

  ngOnInit(): void {
  }

  onNgModelChange(event: String[]) {
    console.log('on ng model change', event);
    this.selectedAvailableCards = event
  }

  cardName(planningCard: PlanningCard): String {
    var name: String = ""

    switch (planningCard) {
      case PlanningCard.zero:
        name = "Zero"
        break
      case PlanningCard.one:
        name = "One"
        break
      case PlanningCard.two:
        name = "Two"
        break
      case PlanningCard.three:
        name = "Three"
        break
      case PlanningCard.five:
        name = "Five"
        break
      case PlanningCard.eight:
        name = "Eight"
        break
      case PlanningCard.thirteen:
        name = "Thirteen"
        break
      case PlanningCard.twenty:
        name = "Twenty"
        break
      case PlanningCard.fourty:
        name = "Fourty"
        break
      case PlanningCard.hundred:
        name = "Hundred"
        break
      case PlanningCard.coffee:
        name = "Coffee"
        break
      case PlanningCard.question:
        name = "Question"
        break
    }
    return name
  }
}


