import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-planning-participant-ticket-card',
  templateUrl: './planning-participant-ticket-card.component.html',
  styleUrls: ['./planning-participant-ticket-card.component.scss']
})
export class PlanningParticipantTicketCardComponent implements OnInit {
  @Input() sessionName: string = ""
  @Input() sessionCode: string = ""
  @Input() ticketTitle: string = ""
  @Input() ticketDescription: string = ""
  @Output() didTapLeaveSession = new EventEmitter<string>()
  @Output() didTapChangeName = new EventEmitter<void>()

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
