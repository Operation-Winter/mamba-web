import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-participant-left-session-card',
  templateUrl: './planning-participant-left-session-card.component.html',
  styleUrls: ['./planning-participant-left-session-card.component.scss']
})
export class PlanningParticipantLeftSessionCardComponent implements OnInit {
  @Input() sessionName: string = ""

  constructor() { }

  ngOnInit() {
  }

}
