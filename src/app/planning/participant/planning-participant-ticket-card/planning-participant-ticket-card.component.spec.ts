/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlanningParticipantTicketCardComponent } from './planning-participant-ticket-card.component';

describe('PlanningParticipantTicketCardComponent', () => {
  let component: PlanningParticipantTicketCardComponent;
  let fixture: ComponentFixture<PlanningParticipantTicketCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningParticipantTicketCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningParticipantTicketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
