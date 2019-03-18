import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturersTableComponent } from './lecturers-table.component';

describe('LecturersTableComponent', () => {
  let component: LecturersTableComponent;
  let fixture: ComponentFixture<LecturersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
