import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../shared/carousel/carousel.component';
import { RandomlistComponent } from '../randomlist/randomlist.component';
import { ProductCardWithImageComponent } from '../shared/product-card-with-image/product-card-with-image.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-erv',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent,
    RandomlistComponent,
    ProductCardWithImageComponent,
  ],
  templateUrl: './erv.component.html',
  styleUrl: './erv.component.css',
})
export class ErvComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    // ✅ SEO Title
    this.title.setTitle(
      'Daikin ERV UAE | Energy Recovery Ventilation System | MEPTECH',
    );

    // ✅ Meta Description
    this.meta.updateTag({
      name: 'description',
      content:
        'Improve indoor air quality with Daikin ERV in UAE. Get energy-saving ventilation systems that ensure fresh airflow, reduced costs, and efficient HVAC performance.',
    });

    // ✅ Optional Keywords
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Daikin ERV UAE, energy recovery ventilator UAE, ventilation system UAE, indoor air quality UAE, HVAC ventilation Dubai',
    });

    // ✅ Open Graph (for sharing)
    this.meta.updateTag({
      property: 'og:title',
      content: 'Daikin ERV UAE | Energy Recovery Ventilation System | MEPTECH',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Improve indoor air quality with Daikin ERV in UAE. Get energy-saving ventilation systems that ensure fresh airflow, reduced costs, and efficient HVAC performance.',
    });
  }

  product = {
    mainImgs: [
      '/products/erv/main1.png',
      '/products/erv/main2.png',
      '/products/erv/main3.png',
    ],
    name: 'Energy Recovery Ventilator',
    short:
      'Daikin ERV is equipped with EC Fan to ensure lower power consumption and Sorption, molecular sieve 3Å Energy Recovery Wheel to recover both sensible and latent heat ensuring higher heat exchange with lower energy consumption due to lower pressure drop.',
    about: `Daikin Energy Recovery Ventilator (ERV) Unit is a complete system, where the ventilation rate is controlled via supply and extract fans. 
An air-to-air heat exchanger transfers heat from the extracted air into the incoming supply fresh air and precool the fresh outside air, 
this helps to prevent energy losses from over ventilation while improving indoor air quality`,
    cards: [
      {
        img: '',
        head: 'Frame & Panel',
        points: [
          'Profile made of extruded aluminum alloy',
          'Internally rounded profiles (10mm) to avoid dirt accumulation',
          'Double chambered profiles with concealed screws',
          'Three-way connecting corners made of reinforced nylon',
          '42mm double skin panel with PIR insulation',
          'Precoated steel outer skin with galvanized inner layer',
        ],
      },
      {
        img: '/products/erv/1.png',
        head: 'Prefilter',
        points: [
          'Efficiency Class G4 / MERV 8',
          'Polyester synthetic media',
          'High dust holding capacity',
          'Galvanized steel frame',
        ],
      },
      {
        img: '/products/erv/2.png',
        head: 'Bag Filter',
        points: [
          'Efficiency Class F7 / MERV 13',
          'Melt blown synthetic media',
          'Ultrasonic welded design',
          'Galvanized steel frame',
        ],
      },
      {
        img: '/products/erv/3.png',
        head: 'Heat Recovery Wheel',
        points: [
          'Molecular sieve 3Å rotor',
          'Aluminum foil layered structure',
          'Radial spoke stability design',
          'Geared motor for constant speed',
        ],
      },
      {
        img: '/products/erv/4.png',
        head: 'High Efficiency EC Fan',
        points: [
          'Backward curved impeller',
          'External rotor motor',
          'IE4 efficiency motor',
        ],
      },
      {
        img: '/products/erv/5.png',
        head: 'Control Box',
        points: ['IP66 enclosure', 'Fan regulator', 'Manual/Auto switch'],
      },
    ],
  };
}
