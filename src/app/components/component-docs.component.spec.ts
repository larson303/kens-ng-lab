import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDocsComponent } from './component-docs.component';

describe('ComponentDocsComponent', () => {
  let component: ComponentDocsComponent;
  let fixture: ComponentFixture<ComponentDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentDocsComponent]
    });
    fixture = TestBed.createComponent(ComponentDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
