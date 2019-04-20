import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCalenderComponent } from './room-calender.component';

describe('RoomCalenderComponent', () => {
  let component: RoomCalenderComponent;
  let fixture: ComponentFixture<RoomCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
