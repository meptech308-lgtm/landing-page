import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineargrillsComponent } from './lineargrills.component';

describe('LineargrillsComponent', () => {
  let component: LineargrillsComponent;
  let fixture: ComponentFixture<LineargrillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineargrillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineargrillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
