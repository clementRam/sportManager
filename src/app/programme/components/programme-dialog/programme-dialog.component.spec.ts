import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeDialogComponent } from './programme-dialog.component';

describe('ProgrammeDialogComponent', () => {
  let component: ProgrammeDialogComponent;
  let fixture: ComponentFixture<ProgrammeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
