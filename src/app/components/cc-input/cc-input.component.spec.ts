import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcInputComponent } from './cc-input.component';

describe('CcInputComponent', () => {
  let component: CcInputComponent;
  let fixture: ComponentFixture<CcInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CcInputComponent]
    });
    fixture = TestBed.createComponent(CcInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
