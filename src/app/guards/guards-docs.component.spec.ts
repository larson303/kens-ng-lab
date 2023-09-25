import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardsDocsComponent } from './guards-docs.component';

describe('GuardsDocsComponent', () => {
  let component: GuardsDocsComponent;
  let fixture: ComponentFixture<GuardsDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardsDocsComponent]
    });
    fixture = TestBed.createComponent(GuardsDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
