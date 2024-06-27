import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeOnFilterComponent } from './practice-on-filter.component';

describe('PracticeOnFilterComponent', () => {
  let component: PracticeOnFilterComponent;
  let fixture: ComponentFixture<PracticeOnFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticeOnFilterComponent]
    });
    fixture = TestBed.createComponent(PracticeOnFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
