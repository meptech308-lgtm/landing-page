import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumecontrolComponent } from './volumecontrol.component';

describe('VolumecontrolComponent', () => {
  let component: VolumecontrolComponent;
  let fixture: ComponentFixture<VolumecontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolumecontrolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolumecontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
