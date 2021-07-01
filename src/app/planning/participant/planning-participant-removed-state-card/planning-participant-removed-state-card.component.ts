import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-participant-removed-state-card',
  templateUrl: './planning-participant-removed-state-card.component.html',
  styleUrls: ['./planning-participant-removed-state-card.component.scss']
})
export class PlanningParticipantRemovedStateCardComponent implements OnInit {
  @Input() sessionName: string = ""

  constructor() { }

  ngOnInit() {
  }

}
