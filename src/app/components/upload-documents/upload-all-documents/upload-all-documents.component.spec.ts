import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAllDocumentsComponent } from './upload-all-documents.component';

describe('UploadAllDocumentsComponent', () => {
  let component: UploadAllDocumentsComponent;
  let fixture: ComponentFixture<UploadAllDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadAllDocumentsComponent]
    });
    fixture = TestBed.createComponent(UploadAllDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
