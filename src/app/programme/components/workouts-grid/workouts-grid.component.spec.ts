import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutsGridComponent } from './workouts-grid.component';

describe('WorkoutsComponent', () => {
  let component: WorkoutsGridComponent;
  let fixture: ComponentFixture<WorkoutsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
