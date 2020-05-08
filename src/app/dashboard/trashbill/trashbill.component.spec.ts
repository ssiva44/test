import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashbillComponent } from './trashbill.component';

describe('TrashbillComponent', () => {
  let component: TrashbillComponent;
  let fixture: ComponentFixture<TrashbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
