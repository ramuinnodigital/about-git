import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessinalInfoComponent } from './professinal-info.component';

describe('ProfessinalInfoComponent', () => {
  let component: ProfessinalInfoComponent;
  let fixture: ComponentFixture<ProfessinalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessinalInfoComponent]
    });
    fixture = TestBed.createComponent(ProfessinalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
