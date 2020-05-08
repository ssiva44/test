import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessdetailsComponent } from './fitnessdetails.component';

describe('FitnessdetailsComponent', () => {
  let component: FitnessdetailsComponent;
  let fixture: ComponentFixture<FitnessdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
