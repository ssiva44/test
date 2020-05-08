import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingreportsComponent } from './billingreports.component';

describe('BillingreportsComponent', () => {
  let component: BillingreportsComponent;
  let fixture: ComponentFixture<BillingreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
