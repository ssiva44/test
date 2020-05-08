import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashcustomersComponent } from './trashcustomers.component';

describe('TrashcustomersComponent', () => {
  let component: TrashcustomersComponent;
  let fixture: ComponentFixture<TrashcustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashcustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
