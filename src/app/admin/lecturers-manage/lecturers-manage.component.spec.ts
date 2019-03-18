import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturersManageComponent } from './lecturers-manage.component';

describe('LecturersManageComponent', () => {
  let component: LecturersManageComponent;
  let fixture: ComponentFixture<LecturersManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturersManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturersManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
