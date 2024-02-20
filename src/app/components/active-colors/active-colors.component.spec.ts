import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveColorsComponent } from './active-colors.component';

describe('ActiveColorsComponent', () => {
  let component: ActiveColorsComponent;
  let fixture: ComponentFixture<ActiveColorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveColorsComponent]
    });
    fixture = TestBed.createComponent(ActiveColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
