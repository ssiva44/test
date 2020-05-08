import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensivedetailsComponent } from './expensivedetails.component';

describe('ExpensivedetailsComponent', () => {
  let component: ExpensivedetailsComponent;
  let fixture: ComponentFixture<ExpensivedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensivedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensivedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
