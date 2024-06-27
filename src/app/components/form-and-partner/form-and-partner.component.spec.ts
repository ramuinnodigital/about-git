import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAndPartnerComponent } from './form-and-partner.component';

describe('FormAndPartnerComponent', () => {
  let component: FormAndPartnerComponent;
  let fixture: ComponentFixture<FormAndPartnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAndPartnerComponent]
    });
    fixture = TestBed.createComponent(FormAndPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
