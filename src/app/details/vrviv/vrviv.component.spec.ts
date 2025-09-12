import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrvivComponent } from './vrviv.component';

describe('VrvivComponent', () => {
  let component: VrvivComponent;
  let fixture: ComponentFixture<VrvivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VrvivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VrvivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
