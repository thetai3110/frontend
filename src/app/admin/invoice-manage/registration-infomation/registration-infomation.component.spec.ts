import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationInfomationComponent } from './registration-infomation.component';

describe('RegistrationInfomationComponent', () => {
  let component: RegistrationInfomationComponent;
  let fixture: ComponentFixture<RegistrationInfomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationInfomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
