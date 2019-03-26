import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturersDialogComponent } from './lecturers-dialog.component';

describe('LecturersDialogComponent', () => {
  let component: LecturersDialogComponent;
  let fixture: ComponentFixture<LecturersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
