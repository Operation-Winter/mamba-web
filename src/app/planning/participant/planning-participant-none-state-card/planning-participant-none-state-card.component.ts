import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-planning-participant-none-state-card',
  templateUrl: './planning-participant-none-state-card.component.html',
  styleUrls: ['./planning-participant-none-state-card.component.scss']
})
export class PlanningParticipantNoneStateCardComponent implements OnInit {
  @Input() sessionName: string = ""
  @Input() sessionCode: string = ""
  @Output() didTapLeaveSession = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }

  onClickLeaveSession() {
    this.didTapLeaveSession.emit()
  }
}
