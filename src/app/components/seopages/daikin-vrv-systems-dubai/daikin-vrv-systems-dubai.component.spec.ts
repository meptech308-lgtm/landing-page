import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaikinVrvSystemsDubaiComponent } from './daikin-vrv-systems-dubai.component';

describe('DaikinVrvSystemsDubaiComponent', () => {
  let component: DaikinVrvSystemsDubaiComponent;
  let fixture: ComponentFixture<DaikinVrvSystemsDubaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaikinVrvSystemsDubaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaikinVrvSystemsDubaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
