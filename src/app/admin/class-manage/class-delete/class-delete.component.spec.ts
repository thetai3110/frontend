import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDeleteComponent } from './class-delete.component';

describe('ClassDeleteComponent', () => {
  let component: ClassDeleteComponent;
  let fixture: ComponentFixture<ClassDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
