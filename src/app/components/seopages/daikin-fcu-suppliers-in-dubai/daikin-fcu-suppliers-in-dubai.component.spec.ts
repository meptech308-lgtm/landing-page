import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaikinFcuSuppliersDubaiComponent } from './daikin-fcu-suppliers-in-dubai.component';

describe('DaikinFcuSuppliersDubaiComponent', () => {
  let component: DaikinFcuSuppliersDubaiComponent;
  let fixture: ComponentFixture<DaikinFcuSuppliersDubaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaikinFcuSuppliersDubaiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DaikinFcuSuppliersDubaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
