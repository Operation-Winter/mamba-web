import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-planning-participant-none-state-card',
  templateUrl: './planning-participant-none-state-card.component.html',
  styleUrls: ['./planning-participant-none-state-card.component.scss']
})
export class PlanningParticipantNoneStateCardComponent implements OnInit {
  @Input() sessionName: string = ""
  @Input() sessionCode: string = ""
  @Output() didTapLeaveSession = new EventEmitter<void>()
  @Output() didTapChangeName = new EventEmitter<void>()

  get sessionURL(): string {
    return environment.baseWebURL + "/planning/participant?sessionCode=" + this.sessionCode
  }

  constructor() { }

  ngOnInit() {
  }

  onClickLeaveSession() {
    this.didTapLeaveSession.emit()
  }

  onClickChangeName() {
    this.didTapChangeName.emit()
  }
}
