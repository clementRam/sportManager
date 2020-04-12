import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeCardComponent } from './programme-card.component';

describe('ProgrammeComponent', () => {
  let component: ProgrammeCardComponent;
  let fixture: ComponentFixture<ProgrammeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
