import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturersDeleteComponent } from './lecturers-delete.component';

describe('LecturersDeleteComponent', () => {
  let component: LecturersDeleteComponent;
  let fixture: ComponentFixture<LecturersDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturersDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturersDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
