import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-landing-ticket-card-content',
  templateUrl: './planning-landing-ticket-card-content.component.html',
  styleUrls: ['./planning-landing-ticket-card-content.component.scss']
})
export class PlanningLandingTicketCardContentComponent implements OnInit {

  @Input() sessionName: string = ""
  @Input() sessionCode: string = ""
  @Input() ticketTitle: string = ""
  @Input() ticketDescription: string = ""

  constructor() { }

  ngOnInit() {
  }

}
