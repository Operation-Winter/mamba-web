import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-planning-host-ticket-card',
  templateUrl: './planning-host-ticket-card.component.html',
  styleUrls: ['./planning-host-ticket-card.component.scss']
})
export class PlanningHostTicketCardComponent implements OnInit {
  @Input() sessionName: string = ""
  @Input() sessionCode: string = ""
  @Input() ticketTitle: string = ""
  @Input() ticketDescription: string = ""
  @Input() isVotingState: boolean = false
  @Input() isFinishedVotingState: boolean = false
  @Output() didTapFinishVoting = new EventEmitter<string>()
  @Output() didTapEndSession = new EventEmitter<string>()
  @Output() didTapRevote = new EventEmitter<string>()
  @Output() didTapAddTicket = new EventEmitter<string>()

  get sessionURL(): string {
    return environment.baseWebURL + "/planning/participant?sessionCode=" + this.sessionCode
  }

  constructor() { }

  ngOnInit() {
  }

  onClickFinishVoting() {
    this.didTapFinishVoting.emit()
  }

  onClickEndSession() {
    this.didTapEndSession.emit()
  }

  onClickRevote() {
    this.didTapRevote.emit()
  }

  onClickAddTicket() {
    this.didTapAddTicket.emit()
  }
}
