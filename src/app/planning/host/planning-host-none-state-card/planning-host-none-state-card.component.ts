import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-planning-host-none-state-card',
  templateUrl: './planning-host-none-state-card.component.html',
  styleUrls: ['./planning-host-none-state-card.component.scss']
})
export class PlanningHostNoneStateCardComponent implements OnInit {
  @Input() sessionName: string = ""
  @Input() sessionCode: string = ""
  @Output() didTapAddTicket = new EventEmitter<void>()
  @Output() didTapEndSession = new EventEmitter<void>()

  get sessionURL(): string {
    return environment.baseWebURL + "/planning/participant?sessionCode=" + this.sessionCode
  }

  constructor() { }

  ngOnInit() {
  }

  onClickAddTicket() {
    this.didTapAddTicket.emit()
  }

  onClickEndSession() {
    this.didTapEndSession.emit()
  }
}
