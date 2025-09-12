import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirhandlingunitsComponent } from './airhandlingunits.component';

describe('AirhandlingunitsComponent', () => {
  let component: AirhandlingunitsComponent;
  let fixture: ComponentFixture<AirhandlingunitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirhandlingunitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirhandlingunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
