import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RooftoppackageComponent } from './rooftoppackage.component';

describe('RooftoppackageComponent', () => {
  let component: RooftoppackageComponent;
  let fixture: ComponentFixture<RooftoppackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RooftoppackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RooftoppackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
