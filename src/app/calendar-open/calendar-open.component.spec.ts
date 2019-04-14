import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarOpenComponent } from './calendar-open.component';

describe('CalendarOpenComponent', () => {
  let component: CalendarOpenComponent;
  let fixture: ComponentFixture<CalendarOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
