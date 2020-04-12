import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutFormDialogComponent } from './workout-form-dialog.component';

describe('WorkoutFormDialogComponent', () => {
  let component: WorkoutFormDialogComponent;
  let fixture: ComponentFixture<WorkoutFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
