/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlanningLandingTicketCardContentComponent } from './planning-landing-ticket-card-content.component';

describe('PlanningHostLandingTicketCardContentsComponent', () => {
  let component: PlanningLandingTicketCardContentComponent;
  let fixture: ComponentFixture<PlanningLandingTicketCardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningLandingTicketCardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningLandingTicketCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
