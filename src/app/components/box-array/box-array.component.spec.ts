import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxArrayComponent } from './box-array.component';

describe('BoxArrayComponent', () => {
  let component: BoxArrayComponent;
  let fixture: ComponentFixture<BoxArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxArrayComponent]
    });
    fixture = TestBed.createComponent(BoxArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
