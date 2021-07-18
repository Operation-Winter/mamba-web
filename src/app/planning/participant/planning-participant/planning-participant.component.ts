import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  shouldAutoConnect: boolean = false

  get uuid() {
    return sessionStorage.getItem('participantUUID')
  }

  get userNameLocal() {
    return localStorage.getItem('userName')
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.uuid != null) {
      this.shouldReconnect = true
    }

    if (this.userNameLocal != null) {
      this.userName = this.userNameLocal
    }

    this.route.queryParams.subscribe(params => {
      this.sessionCode = params['sessionCode']

      if (this.userNameLocal != null && this.sessionCode != null) {
        this.shouldAutoConnect = true
      }
    })
  }

  didTapJoinSession() {
    this.sessionJoined = true
  }
}
