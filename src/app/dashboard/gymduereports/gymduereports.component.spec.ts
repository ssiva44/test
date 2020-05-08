import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymduereportsComponent } from './gymduereports.component';

describe('GymduereportsComponent', () => {
  let component: GymduereportsComponent;
  let fixture: ComponentFixture<GymduereportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymduereportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymduereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
