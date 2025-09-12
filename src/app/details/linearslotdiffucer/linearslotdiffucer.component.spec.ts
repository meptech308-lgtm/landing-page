import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearslotdiffucerComponent } from './linearslotdiffucer.component';

describe('LinearslotdiffucerComponent', () => {
  let component: LinearslotdiffucerComponent;
  let fixture: ComponentFixture<LinearslotdiffucerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearslotdiffucerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinearslotdiffucerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
