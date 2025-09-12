import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageComponent } from "../shared/image/image.component";
import { RandomlistComponent } from "../randomlist/randomlist.component";

@Component({
  selector: 'app-lineargrills',
  imports: [CommonModule, ImageComponent, RandomlistComponent],
  templateUrl: './lineargrills.component.html',
  styleUrl: './lineargrills.component.css'
})
export class LineargrillsComponent {

  product = {
    mainImg: '/products/lineargrills/main.png',
    name: 'Linear Grills',
    short: `MepTech Linear bar grilles and registers provide a high standard of quality, solid construction, and quiet, controlled performance.
These are available in different blade patterns based on the applications. 15 degrees one way, 15 degrees two way and 0 degree based on the air deflection requirement in the room.`,
    images: [
      {
        img: '/products/lineargrills/1.png',
        head: 'RLG-0'
      },
      {
        img: '/products/lineargrills/2.png',
        head: 'RLG-D-0°'
      },
      {
        img: '/products/lineargrills/3.png',
        head: 'SLG-15°-2Way'
      },
      {
        img: '/products/lineargrills/4.png',
        head: 'INTERNAL CURVED LINEAR BAR GRILLES'
      },
      {
        img: '/products/lineargrills/5.png',
        head: 'RLG-15-1WAY'
      },
      {
        img: '/products/lineargrills/6.png',
        head: 'SLG-0°'
      },
      {
        img: '/products/lineargrills/7.png',
        head: 'SLG-D-15°-2Way'
      },
      {
        img: '/products/lineargrills/8.png',
        head: 'LOW-LEAKAGE-VCD-FLANGE-TYPE'
      },
    ]
  }

}
