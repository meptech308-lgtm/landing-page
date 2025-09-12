import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancoilunitsComponent } from './fancoilunits.component';

describe('FancoilunitsComponent', () => {
  let component: FancoilunitsComponent;
  let fixture: ComponentFixture<FancoilunitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FancoilunitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FancoilunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
