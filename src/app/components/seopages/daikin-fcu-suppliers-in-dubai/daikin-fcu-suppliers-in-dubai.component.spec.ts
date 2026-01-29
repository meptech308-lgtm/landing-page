import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaikinFcuSuppliersInDubaiComponent } from './daikin-fcu-suppliers-in-dubai.component';

describe('DaikinFcuSuppliersInDubaiComponent', () => {
  let component: DaikinFcuSuppliersInDubaiComponent;
  let fixture: ComponentFixture<DaikinFcuSuppliersInDubaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaikinFcuSuppliersInDubaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaikinFcuSuppliersInDubaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
