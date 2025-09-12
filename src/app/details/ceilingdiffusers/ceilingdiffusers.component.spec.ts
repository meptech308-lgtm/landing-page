import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeilingdiffusersComponent } from './ceilingdiffusers.component';

describe('CeilingdiffusersComponent', () => {
  let component: CeilingdiffusersComponent;
  let fixture: ComponentFixture<CeilingdiffusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeilingdiffusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeilingdiffusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
