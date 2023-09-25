import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDocsComponent } from './services-docs.component';

describe('ServicesDocsComponent', () => {
  let component: ServicesDocsComponent;
  let fixture: ComponentFixture<ServicesDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesDocsComponent]
    });
    fixture = TestBed.createComponent(ServicesDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
