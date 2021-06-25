import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PlanningCard } from 'src/app/models/planning-card.enum';
import { PlanningCardMapper } from 'src/app/mapper/planning-card-mapper';
@Component({
  selector: 'app-planning-host-setup',
  templateUrl: './planning-host-setup.component.html',
  styleUrls: ['./planning-host-setup.component.scss']
})
export class PlanningHostSetupComponent implements OnInit {
  planningCardMapper = new PlanningCardMapper()

  availableCards: PlanningCard[] = this.planningCardMapper.allCases
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
}