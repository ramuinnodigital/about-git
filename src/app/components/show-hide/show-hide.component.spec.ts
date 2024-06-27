import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHideComponent } from './show-hide.component';

describe('ShowHideComponent', () => {
  let component: ShowHideComponent;
  let fixture: ComponentFixture<ShowHideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowHideComponent]
    });
    fixture = TestBed.createComponent(ShowHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
