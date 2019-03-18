import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturersFormComponent } from './lecturers-form.component';

describe('LecturersFormComponent', () => {
  let component: LecturersFormComponent;
  let fixture: ComponentFixture<LecturersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
