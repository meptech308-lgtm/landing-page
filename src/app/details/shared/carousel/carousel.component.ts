import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() images: string[] = [];
  imagesPerSlide = 3;

  get groupedImages() {
    const groups: string[][] = [];
    for (let i = 0; i < this.images.length; i += this.imagesPerSlide) {
      groups.push(this.images.slice(i, i + this.imagesPerSlide));
    }
    return groups;
  }
}
