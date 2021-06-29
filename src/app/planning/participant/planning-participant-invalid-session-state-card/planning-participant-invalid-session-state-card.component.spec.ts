/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlanningParticipantInvalidSessionStateCardComponent } from './planning-participant-invalid-session-state-card.component';

describe('PlanningParticipantInvalidSessionStateCardComponent', () => {
  let component: PlanningParticipantInvalidSessionStateCardComponent;
  let fixture: ComponentFixture<PlanningParticipantInvalidSessionStateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningParticipantInvalidSessionStateCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningParticipantInvalidSessionStateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
