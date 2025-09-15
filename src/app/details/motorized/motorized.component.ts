import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageComponent } from "../shared/image/image.component";
import { RandomlistComponent } from "../randomlist/randomlist.component";

@Component({
  selector: 'app-motorized',
  imports: [CommonModule, ImageComponent, RandomlistComponent],
  templateUrl: './motorized.component.html',
  styleUrl: './motorized.component.css'
})
export class MotorizedComponent {

  product = {
    mainImg: '/products/motorized/main.jpg',
    name: 'Motorized Smoke Fire Damper',
    short: 'Motorized Smoke damper is an ideal life-safety equipment. It is typically put in an air transfer opening or an air distribution system and used at different zones to stop the fire. It is primarily made to close automatically when heat due to fire is detected, blocking airflow and preventing the spread of fire as a result.',
    images: [
      {
        img: '/products/motorized/1.png',
        head: 'Motorized fire dampers'
      },
      {
        img: '/products/motorized/2.png',
        head: 'Motorized smoke dampers'
      },
      {
        img: '/products/motorized/3.png',
        head: 'Motorized fire and smoke dampers'
      },
      {
        img: '/products/motorized/4.png',
        head: 'Motorized fire dampers'
      },
      {
        img: '/products/motorized/5.png',
        head: 'Motorized smoke dampers'
      },
      {
        img: '/products/motorized/6.png',
        head: 'Motorized fire and smoke dampers'
      }
    ]
  }

}
