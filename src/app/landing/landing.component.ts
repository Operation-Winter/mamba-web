import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickHost() {
    sessionStorage.removeItem('hostUUID')
    this.router.navigate(['/planning/host'])
  }

  onClickJoin() {
    sessionStorage.removeItem('participantUUID')
    this.router.navigate(['/planning/participant'])
  }
}
