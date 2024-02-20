import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLazyComponent } from './second-lazy.component';

describe('SecondLazyComponent', () => {
  let component: SecondLazyComponent;
  let fixture: ComponentFixture<SecondLazyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondLazyComponent]
    });
    fixture = TestBed.createComponent(SecondLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
