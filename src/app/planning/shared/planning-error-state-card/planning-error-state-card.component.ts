import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-planning-error-state-card',
  templateUrl: './planning-error-state-card.component.html',
  styleUrls: ['./planning-error-state-card.component.scss']
})
export class PlanningErrorStateCardComponent implements OnInit {

  @Input() sessionName: string = ""
  @Input() errorCode: string = ""
  @Input() errorDescription: string = ""
  @Output() didTapReconnect = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }

}
