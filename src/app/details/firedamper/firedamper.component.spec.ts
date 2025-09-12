import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiredamperComponent } from './firedamper.component';

describe('FiredamperComponent', () => {
  let component: FiredamperComponent;
  let fixture: ComponentFixture<FiredamperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiredamperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiredamperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
