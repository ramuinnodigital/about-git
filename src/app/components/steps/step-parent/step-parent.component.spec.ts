import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepParentComponent } from './step-parent.component';

describe('StepParentComponent', () => {
  let component: StepParentComponent;
  let fixture: ComponentFixture<StepParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepParentComponent]
    });
    fixture = TestBed.createComponent(StepParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
