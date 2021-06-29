import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-planning-participant-setup',
  templateUrl: './planning-participant-setup.component.html',
  styleUrls: ['./planning-participant-setup.component.scss']
})
export class PlanningParticipantSetupComponent implements OnInit {
  sessionCodeValue: string = ""
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
  get sessionCode() {
    return this.sessionCodeValue
  }
  set sessionCode(value) {
    this.sessionCodeValue = value
    this.sessionCodeChange.emit(value)
  }
  @Output() sessionCodeChange = new EventEmitter<string>()

  @Output() joinSessionTapped = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  onClickJoinSession() {
    this.joinSessionTapped.next(true)
  }
}
