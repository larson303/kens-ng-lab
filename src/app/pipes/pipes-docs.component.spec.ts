import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesDocsComponent } from './pipes-docs.component';

describe('PipesDocsComponent', () => {
  let component: PipesDocsComponent;
  let fixture: ComponentFixture<PipesDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesDocsComponent]
    });
    fixture = TestBed.createComponent(PipesDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
