import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDocsComponent } from './other-docs.component';

describe('OtherDocsComponent', () => {
  let component: OtherDocsComponent;
  let fixture: ComponentFixture<OtherDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherDocsComponent]
    });
    fixture = TestBed.createComponent(OtherDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
