import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-session-ended-card',
  templateUrl: './planning-session-ended-card.component.html',
  styleUrls: ['./planning-session-ended-card.component.scss']
})
export class PlanningSessionEndedCardComponent implements OnInit {

  @Input() sessionName: string = ""

  constructor() { }

  ngOnInit() {
  }

}
