/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlanningParticipantNoneStateCardComponent } from './planning-participant-none-state-card.component';

describe('PlanningParticipantNoneStateCardComponent', () => {
  let component: PlanningParticipantNoneStateCardComponent;
  let fixture: ComponentFixture<PlanningParticipantNoneStateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningParticipantNoneStateCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningParticipantNoneStateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
