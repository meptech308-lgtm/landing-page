import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageComponent } from "../shared/image/image.component";
import { FeaturesComponent } from "../shared/features/features.component";

@Component({
  selector: 'app-registers',
  imports: [CommonModule, ImageComponent, FeaturesComponent],
  templateUrl: './registers.component.html',
  styleUrl: './registers.component.css'
})
export class RegistersComponent {

  product = {
    mainImg: '/products/registers/mian.png',
    name: 'Registers',
    short: 'In the floor, wall, or ceiling, air registers have slatted openings that a user can control using an adjustable damper. Usually, for airflow control, the damper opens or closes access to the air duct with a rolling guide or lever on one side of the vent. These openings do not return air to the HVAC system, but deliver air that is heated or cooled into a room.',
    features: [
      'Well fitted',
      'To run smoothly',
      'Adequate air circulation',
      'Simple phase of installation',
      'Pleasant to the consumer',
      'Reasonsable price in the market',
      'We supply a wide range of grilles and registers with help from a team of highly trained and experienced professionals throughout UAE. In compliance with diversified customer requirements, we deliver these products within the defined time frame and comply with all specifications in order to achieve the quality that our customers want.'
    ],
    images: [
      {
        img: '/products/registers/1.png',
        head: 'RGH-45°'
      },
      {
        img: '/products/registers/1.png',
        head: 'RG-V'
      },
      {
        img: '/products/registers/1.png',
        head: 'RG-HD'
      },
      {
        img: '/products/registers/1.png',
        head: 'RG-H'
      },
      {
        img: '/products/registers/1.png',
        head: 'RG-FD'
      },
      {
        img: '/products/registers/1.png',
        head: 'ECG'
      },
      {
        img: '/products/registers/1.png',
        head: 'ECG-F'
      },
      {
        img: '/products/registers/1.png',
        head: 'ECG-D'
      },
      {
        img: '/products/registers/1.png',
        head: 'PG'
      },
      {
        img: '/products/registers/1.png',
        head: 'SG-H'
      },
      {
        img: '/products/registers/1.png',
        head: 'SG-VD'
      },
      {
        img: '/products/registers/1.png',
        head: 'SG-V'
      },
      {
        img: '/products/registers/1.png',
        head: 'SG-HD'
      },
      {
        img: '/products/registers/1.png',
        head: 'RG-F'
      },
    ]
  }

}
