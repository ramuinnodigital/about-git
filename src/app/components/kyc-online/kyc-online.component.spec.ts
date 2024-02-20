import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycOnlineComponent } from './kyc-online.component';

describe('KycOnlineComponent', () => {
  let component: KycOnlineComponent;
  let fixture: ComponentFixture<KycOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KycOnlineComponent]
    });
    fixture = TestBed.createComponent(KycOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
