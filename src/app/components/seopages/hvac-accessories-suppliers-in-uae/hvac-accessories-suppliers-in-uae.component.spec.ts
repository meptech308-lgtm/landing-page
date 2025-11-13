import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvacAccessoriesSuppliersInUaeComponent } from './hvac-accessories-suppliers-in-uae.component';

describe('HvacAccessoriesSuppliersInUaeComponent', () => {
  let component: HvacAccessoriesSuppliersInUaeComponent;
  let fixture: ComponentFixture<HvacAccessoriesSuppliersInUaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HvacAccessoriesSuppliersInUaeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HvacAccessoriesSuppliersInUaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
