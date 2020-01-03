import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleFormDialogComponent } from './muscle-form-dialog.component';

describe('MuscleFormDialogComponent', () => {
  let component: MuscleFormDialogComponent;
  let fixture: ComponentFixture<MuscleFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuscleFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscleFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
