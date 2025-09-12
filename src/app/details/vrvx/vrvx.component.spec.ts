import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrvxComponent } from './vrvx.component';

describe('VrvxComponent', () => {
  let component: VrvxComponent;
  let fixture: ComponentFixture<VrvxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VrvxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VrvxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
