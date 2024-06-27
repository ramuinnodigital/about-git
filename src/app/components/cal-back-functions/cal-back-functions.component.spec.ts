import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalBackFunctionsComponent } from './cal-back-functions.component';

describe('CalBackFunctionsComponent', () => {
  let component: CalBackFunctionsComponent;
  let fixture: ComponentFixture<CalBackFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalBackFunctionsComponent]
    });
    fixture = TestBed.createComponent(CalBackFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
