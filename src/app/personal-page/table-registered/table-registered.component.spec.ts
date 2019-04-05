import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRegisteredComponent } from './table-registered.component';

describe('TableRegisteredComponent', () => {
  let component: TableRegisteredComponent;
  let fixture: ComponentFixture<TableRegisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRegisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
