import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningHostComponent } from './planning-host.component';

describe('PlanningHostComponent', () => {
  let component: PlanningHostComponent;
  let fixture: ComponentFixture<PlanningHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
