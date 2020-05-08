import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulerightsComponent } from './modulerights.component';

describe('ModulerightsComponent', () => {
  let component: ModulerightsComponent;
  let fixture: ComponentFixture<ModulerightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulerightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulerightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
