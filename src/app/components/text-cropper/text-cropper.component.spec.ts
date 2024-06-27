import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCropperComponent } from './text-cropper.component';

describe('TextCropperComponent', () => {
  let component: TextCropperComponent;
  let fixture: ComponentFixture<TextCropperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextCropperComponent]
    });
    fixture = TestBed.createComponent(TextCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
