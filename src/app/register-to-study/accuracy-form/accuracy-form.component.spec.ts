import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuracyFormComponent } from './accuracy-form.component';

describe('AccuracyFormComponent', () => {
  let component: AccuracyFormComponent;
  let fixture: ComponentFixture<AccuracyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccuracyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccuracyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
