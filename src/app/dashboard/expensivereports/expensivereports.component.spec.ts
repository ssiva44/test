import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensivereportsComponent } from './expensivereports.component';

describe('ExpensivereportsComponent', () => {
  let component: ExpensivereportsComponent;
  let fixture: ComponentFixture<ExpensivereportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensivereportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensivereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
