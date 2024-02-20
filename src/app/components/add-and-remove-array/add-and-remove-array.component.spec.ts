import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndRemoveArrayComponent } from './add-and-remove-array.component';

describe('AddAndRemoveArrayComponent', () => {
  let component: AddAndRemoveArrayComponent;
  let fixture: ComponentFixture<AddAndRemoveArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAndRemoveArrayComponent]
    });
    fixture = TestBed.createComponent(AddAndRemoveArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
