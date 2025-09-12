import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlunitsComponent } from './controlunits.component';

describe('ControlunitsComponent', () => {
  let component: ControlunitsComponent;
  let fixture: ComponentFixture<ControlunitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlunitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
