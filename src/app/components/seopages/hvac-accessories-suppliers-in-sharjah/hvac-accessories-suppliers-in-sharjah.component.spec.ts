import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvacAccessoriesSuppliersInSharjahComponent } from './hvac-accessories-suppliers-in-sharjah.component';

describe('HvacAccessoriesSuppliersInSharjahComponent', () => {
  let component: HvacAccessoriesSuppliersInSharjahComponent;
  let fixture: ComponentFixture<HvacAccessoriesSuppliersInSharjahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HvacAccessoriesSuppliersInSharjahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HvacAccessoriesSuppliersInSharjahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
