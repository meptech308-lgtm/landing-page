import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcealedacComponent } from './concealedac.component';

describe('ConcealedacComponent', () => {
  let component: ConcealedacComponent;
  let fixture: ComponentFixture<ConcealedacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcealedacComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcealedacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
