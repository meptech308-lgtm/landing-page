import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErvComponent } from './erv.component';

describe('ErvComponent', () => {
  let component: ErvComponent;
  let fixture: ComponentFixture<ErvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
