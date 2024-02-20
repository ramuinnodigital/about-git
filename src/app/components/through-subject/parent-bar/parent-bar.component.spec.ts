import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBarComponent } from './parent-bar.component';

describe('ParentBarComponent', () => {
  let component: ParentBarComponent;
  let fixture: ComponentFixture<ParentBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentBarComponent]
    });
    fixture = TestBed.createComponent(ParentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
