import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepMainComponent } from './step-main.component';

describe('StepMainComponent', () => {
  let component: StepMainComponent;
  let fixture: ComponentFixture<StepMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepMainComponent]
    });
    fixture = TestBed.createComponent(StepMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
