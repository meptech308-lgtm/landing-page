import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundatteComponent } from './soundatte.component';

describe('SoundatteComponent', () => {
  let component: SoundatteComponent;
  let fixture: ComponentFixture<SoundatteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundatteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundatteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
