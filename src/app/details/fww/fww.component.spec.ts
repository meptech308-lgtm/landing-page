import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwwComponent } from './fww.component';

describe('FwwComponent', () => {
  let component: FwwComponent;
  let fixture: ComponentFixture<FwwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FwwComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FwwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
