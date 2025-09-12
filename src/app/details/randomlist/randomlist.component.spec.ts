import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomlistComponent } from './randomlist.component';

describe('RandomlistComponent', () => {
  let component: RandomlistComponent;
  let fixture: ComponentFixture<RandomlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
