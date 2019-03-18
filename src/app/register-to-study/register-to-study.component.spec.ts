import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterToStudyComponent } from './register-to-study.component';

describe('RegisterToStudyComponent', () => {
  let component: RegisterToStudyComponent;
  let fixture: ComponentFixture<RegisterToStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterToStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterToStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
