import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcologyunitComponent } from './ecologyunit.component';

describe('EcologyunitComponent', () => {
  let component: EcologyunitComponent;
  let fixture: ComponentFixture<EcologyunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcologyunitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcologyunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
