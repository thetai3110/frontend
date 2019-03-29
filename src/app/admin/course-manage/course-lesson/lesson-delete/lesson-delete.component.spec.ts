import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDeleteComponent } from './lesson-delete.component';

describe('LessonDeleteComponent', () => {
  let component: LessonDeleteComponent;
  let fixture: ComponentFixture<LessonDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
