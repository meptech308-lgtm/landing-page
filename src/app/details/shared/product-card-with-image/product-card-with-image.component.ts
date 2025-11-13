import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-with-image',
  imports: [CommonModule],
  templateUrl: './product-card-with-image.component.html',
  styleUrl: './product-card-with-image.component.css'
})
export class ProductCardWithImageComponent {
  @Input() imageUrl!: string; 
  @Input() head!: string;
  @Input() points: string[] = [];
}
