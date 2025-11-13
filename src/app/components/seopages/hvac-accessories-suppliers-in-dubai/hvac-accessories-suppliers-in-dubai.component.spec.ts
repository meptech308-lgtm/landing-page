import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvacAccessoriesSuppliersInDubaiComponent } from './hvac-accessories-suppliers-in-dubai.component';

describe('HvacAccessoriesSuppliersInDubaiComponent', () => {
  let component: HvacAccessoriesSuppliersInDubaiComponent;
  let fixture: ComponentFixture<HvacAccessoriesSuppliersInDubaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HvacAccessoriesSuppliersInDubaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HvacAccessoriesSuppliersInDubaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
