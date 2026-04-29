import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImageComponent } from '../shared/image/image.component';
import { RandomlistComponent } from '../randomlist/randomlist.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-motorized',
  standalone: true,
  imports: [CommonModule, ImageComponent, RandomlistComponent],
  templateUrl: './motorized.component.html',
  styleUrl: './motorized.component.css',
})
export class MotorizedComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    // ✅ SEO Title
    this.title.setTitle(
      'Motorized Dampers UAE | Automated Airflow Control | MEPTECH',
    );

    // ✅ Meta Description
    this.meta.updateTag({
      name: 'description',
      content:
        'Upgrade to motorized dampers in UAE for automated airflow control. Improve HVAC efficiency, precision, and system performance with advanced solutions.',
    });

    // ✅ Keywords
    this.meta.updateTag({
      name: 'keywords',
      content:
        'motorized dampers UAE, smoke fire dampers UAE, HVAC automation UAE, motorized fire damper Dubai, airflow control systems UAE',
    });

    // ✅ Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: 'Motorized Dampers UAE | Automated Airflow Control | MEPTECH',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Upgrade to motorized dampers in UAE for automated airflow control. Improve HVAC efficiency, precision, and system performance with advanced solutions.',
    });
  }

  product = {
    mainImg: '/products/motorized/main.jpg',
    name: 'Motorized Smoke Fire Damper',
    short: `Motorized smoke and fire dampers are advanced life-safety devices designed to prevent the spread of fire and smoke through HVAC duct systems. Installed within air distribution systems, these dampers automatically close when triggered by temperature rise or control signals, effectively isolating affected zones.

They provide precise control through motorized operation, enabling integration with building management systems (BMS) for enhanced safety and automation. These dampers are widely used in commercial and industrial buildings where both airflow control and fire protection are critical.`,

    images: [
      { img: '/products/motorized/1.png', head: 'Motorized Fire Dampers' },
      { img: '/products/motorized/2.png', head: 'Motorized Smoke Dampers' },
      {
        img: '/products/motorized/3.png',
        head: 'Motorized Fire & Smoke Dampers',
      },
      { img: '/products/motorized/4.png', head: 'Motorized Fire Dampers' },
      { img: '/products/motorized/5.png', head: 'Motorized Smoke Dampers' },
      {
        img: '/products/motorized/6.png',
        head: 'Motorized Fire & Smoke Dampers',
      },
    ],
  };
}
