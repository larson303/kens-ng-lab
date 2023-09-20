import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateUtilsComponent } from './date-utils.component';

describe('DateUtilsComponent', () => {
  let component: DateUtilsComponent;
  let fixture: ComponentFixture<DateUtilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateUtilsComponent]
    });
    fixture = TestBed.createComponent(DateUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
