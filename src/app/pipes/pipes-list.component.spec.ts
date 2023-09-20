import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesListComponent } from './pipes-list.component';

describe('PipesListComponent', () => {
  let component: PipesListComponent;
  let fixture: ComponentFixture<PipesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesListComponent]
    });
    fixture = TestBed.createComponent(PipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
