import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallsplitComponent } from './wallsplit.component';

describe('WallsplitComponent', () => {
  let component: WallsplitComponent;
  let fixture: ComponentFixture<WallsplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WallsplitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallsplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
