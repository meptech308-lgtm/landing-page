import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorizedComponent } from './motorized.component';

describe('MotorizedComponent', () => {
  let component: MotorizedComponent;
  let fixture: ComponentFixture<MotorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorizedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
