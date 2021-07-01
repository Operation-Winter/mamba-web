import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-participant',
  templateUrl: './planning-participant.component.html',
  styleUrls: ['./planning-participant.component.scss']
})
export class PlanningParticipantComponent implements OnInit {
  sessionJoined: boolean = false
  sessionCode: string = ""
  userName: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  didTapJoinSession() {
    this.sessionJoined = true
  }
}
