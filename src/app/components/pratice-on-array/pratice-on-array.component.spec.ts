import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticeOnArrayComponent } from './pratice-on-array.component';

describe('PraticeOnArrayComponent', () => {
  let component: PraticeOnArrayComponent;
  let fixture: ComponentFixture<PraticeOnArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PraticeOnArrayComponent]
    });
    fixture = TestBed.createComponent(PraticeOnArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
