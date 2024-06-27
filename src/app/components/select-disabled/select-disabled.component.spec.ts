import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDisabledComponent } from './select-disabled.component';

describe('SelectDisabledComponent', () => {
  let component: SelectDisabledComponent;
  let fixture: ComponentFixture<SelectDisabledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectDisabledComponent]
    });
    fixture = TestBed.createComponent(SelectDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
