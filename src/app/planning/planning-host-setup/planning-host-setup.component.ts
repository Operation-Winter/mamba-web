import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PlanningCard } from 'src/app/models/planning-card.enum';

@Component({
  selector: 'app-planning-host-setup',
  templateUrl: './planning-host-setup.component.html',
  styleUrls: ['./planning-host-setup.component.scss']
})
export class PlanningHostSetupComponent implements OnInit {
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
  startSessionDisabled: boolean = true

  

  selectedAvailableCardValues: string[] = this.availableCards
  sessionNameValue: string = ""
  userNameValue: string = ""

  @Input()
  get userName() {
    return this.userNameValue
  }
  set userName(value) {
    this.userNameValue = value
    this.userNameChange.emit(value)
  }
  @Output() userNameChange = new EventEmitter<string>()

  @Input()
  get selectedAvailableCards() {
    return this.selectedAvailableCardValues
  }
  set selectedAvailableCards(value) {
    this.selectedAvailableCardValues = value
    this.selectedAvailableCardsChange.emit(value)
  }
  @Output() selectedAvailableCardsChange = new EventEmitter<string[]>()

  @Input()
  get sessionName() {
    return this.sessionNameValue
  }
  set sessionName(value) {
    this.sessionNameValue = value
    this.sessionNameChange.emit(value)
  }
  @Output() sessionNameChange = new EventEmitter<string>()


  @Output('startSessionTapped') startSessionTapped = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  onNgModelChange(list: string[]) {
    this.selectedAvailableCards = list
  }

  onClickStartSession() {
    this.startSessionTapped.next(true)
  }

  cardName(planningCard: PlanningCard): string {
    var name: string = ""

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