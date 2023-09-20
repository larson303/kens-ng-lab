import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesListComponent } from './directives-list.component';

describe('DirectivesListComponent', () => {
  let component: DirectivesListComponent;
  let fixture: ComponentFixture<DirectivesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesListComponent]
    });
    fixture = TestBed.createComponent(DirectivesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
