import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThemesColorComponent } from './form-themes-color.component';

describe('FormThemesColorComponent', () => {
  let component: FormThemesColorComponent;
  let fixture: ComponentFixture<FormThemesColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormThemesColorComponent]
    });
    fixture = TestBed.createComponent(FormThemesColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
