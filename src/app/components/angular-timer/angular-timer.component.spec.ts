import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTimerComponent } from './angular-timer.component';

describe('AngularTimerComponent', () => {
  let component: AngularTimerComponent;
  let fixture: ComponentFixture<AngularTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularTimerComponent]
    });
    fixture = TestBed.createComponent(AngularTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
