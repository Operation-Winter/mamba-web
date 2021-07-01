/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlanningHostNoneStateCardComponent } from './planning-host-none-state-card.component';

describe('PlanningHostNoneStateCardComponent', () => {
  let component: PlanningHostNoneStateCardComponent;
  let fixture: ComponentFixture<PlanningHostNoneStateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningHostNoneStateCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningHostNoneStateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
