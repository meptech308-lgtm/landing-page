import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZohoComponent } from './zoho.component';

describe('ZohoComponent', () => {
  let component: ZohoComponent;
  let fixture: ComponentFixture<ZohoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZohoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZohoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
