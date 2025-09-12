import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablereturndamperComponent } from './variablereturndamper.component';

describe('VariablereturndamperComponent', () => {
  let component: VariablereturndamperComponent;
  let fixture: ComponentFixture<VariablereturndamperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariablereturndamperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariablereturndamperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
