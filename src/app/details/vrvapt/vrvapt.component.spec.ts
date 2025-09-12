import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrvaptComponent } from './vrvapt.component';

describe('VrvaptComponent', () => {
  let component: VrvaptComponent;
  let fixture: ComponentFixture<VrvaptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VrvaptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VrvaptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
