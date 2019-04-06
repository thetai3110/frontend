import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDialogComponent } from './personal-dialog.component';

describe('PersonalDialogComponent', () => {
  let component: PersonalDialogComponent;
  let fixture: ComponentFixture<PersonalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
