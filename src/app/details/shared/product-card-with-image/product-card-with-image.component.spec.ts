import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardWithImageComponent } from './product-card-with-image.component';

describe('ProductCardWithImageComponent', () => {
  let component: ProductCardWithImageComponent;
  let fixture: ComponentFixture<ProductCardWithImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardWithImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
