import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvacAccessoriesSuppliersInAbuDhabiComponent } from './hvac-accessories-suppliers-in-abu-dhabi.component';

describe('HvacAccessoriesSuppliersInAbuDhabiComponent', () => {
  let component: HvacAccessoriesSuppliersInAbuDhabiComponent;
  let fixture: ComponentFixture<HvacAccessoriesSuppliersInAbuDhabiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HvacAccessoriesSuppliersInAbuDhabiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HvacAccessoriesSuppliersInAbuDhabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
