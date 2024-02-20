import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallRazorpayComponent } from './install-razorpay.component';

describe('InstallRazorpayComponent', () => {
  let component: InstallRazorpayComponent;
  let fixture: ComponentFixture<InstallRazorpayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallRazorpayComponent]
    });
    fixture = TestBed.createComponent(InstallRazorpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
