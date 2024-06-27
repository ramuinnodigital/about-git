import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateValueWithIndexComponent } from './update-value-with-index.component';

describe('UpdateValueWithIndexComponent', () => {
  let component: UpdateValueWithIndexComponent;
  let fixture: ComponentFixture<UpdateValueWithIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateValueWithIndexComponent]
    });
    fixture = TestBed.createComponent(UpdateValueWithIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
