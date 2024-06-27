import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMethodComponent } from './switch-method.component';

describe('SwitchMethodComponent', () => {
  let component: SwitchMethodComponent;
  let fixture: ComponentFixture<SwitchMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchMethodComponent]
    });
    fixture = TestBed.createComponent(SwitchMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
