import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditorComponent } from './ngx-editor.component';

describe('NgxEditorComponent', () => {
  let component: NgxEditorComponent;
  let fixture: ComponentFixture<NgxEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxEditorComponent]
    });
    fixture = TestBed.createComponent(NgxEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
