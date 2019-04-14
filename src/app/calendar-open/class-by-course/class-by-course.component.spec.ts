import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassByCourseComponent } from './class-by-course.component';

describe('ClassByCourseComponent', () => {
  let component: ClassByCourseComponent;
  let fixture: ComponentFixture<ClassByCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassByCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassByCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
