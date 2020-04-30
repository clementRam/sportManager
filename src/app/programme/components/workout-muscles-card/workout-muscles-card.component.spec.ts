import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutMusclesCardComponent } from './workout-muscles-card.component';

describe('WorkoutComponent', () => {
  let component: WorkoutMusclesCardComponent;
  let fixture: ComponentFixture<WorkoutMusclesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutMusclesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutMusclesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
