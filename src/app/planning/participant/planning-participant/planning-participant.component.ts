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
  shouldReconnect: boolean = false

  get uuid() {
    return sessionStorage.getItem('participantUUID')
  }

  constructor() { }

  ngOnInit(): void {
    if (this.uuid != null) {
      this.shouldReconnect = true
    }
  }

  didTapJoinSession() {
    this.sessionJoined = true
  }
}
