import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashexpensiveComponent } from './trashexpensive.component';

describe('TrashexpensiveComponent', () => {
  let component: TrashexpensiveComponent;
  let fixture: ComponentFixture<TrashexpensiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashexpensiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashexpensiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
