import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-error-state-card',
  templateUrl: './planning-error-state-card.component.html',
  styleUrls: ['./planning-error-state-card.component.scss']
})
export class PlanningErrorStateCardComponent implements OnInit {

  @Input() sessionName: string = ""

  constructor() { }

  ngOnInit() {
  }

}
