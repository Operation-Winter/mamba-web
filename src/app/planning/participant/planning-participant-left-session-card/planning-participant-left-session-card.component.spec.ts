/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlanningParticipantLeftSessionCardComponent } from './planning-participant-left-session-card.component';

describe('PlanningParticipantLeftSessionCardComponent', () => {
  let component: PlanningParticipantLeftSessionCardComponent;
  let fixture: ComponentFixture<PlanningParticipantLeftSessionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningParticipantLeftSessionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningParticipantLeftSessionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
