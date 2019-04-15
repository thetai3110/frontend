import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCertificateComponent } from './exam-certificate.component';

describe('ExamCertificateComponent', () => {
  let component: ExamCertificateComponent;
  let fixture: ComponentFixture<ExamCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
