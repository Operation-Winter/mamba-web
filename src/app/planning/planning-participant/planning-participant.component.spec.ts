import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningParticipantComponent } from './planning-participant.component';

describe('PlanningParticipantComponent', () => {
  let component: PlanningParticipantComponent;
  let fixture: ComponentFixture<PlanningParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
