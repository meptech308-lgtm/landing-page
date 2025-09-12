import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonreturndampersComponent } from './nonreturndampers.component';

describe('NonreturndampersComponent', () => {
  let component: NonreturndampersComponent;
  let fixture: ComponentFixture<NonreturndampersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonreturndampersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonreturndampersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
