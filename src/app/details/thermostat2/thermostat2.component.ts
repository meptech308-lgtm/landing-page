import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FeaturesComponent } from '../shared/features/features.component';
import { RandomlistComponent } from '../randomlist/randomlist.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-thermostat2',
  standalone: true,
  imports: [CommonModule, FeaturesComponent, RandomlistComponent],
  templateUrl: './thermostat2.component.html',
  styleUrl: './thermostat2.component.css',
})
export class Thermostat2Component implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    // ✅ SEO Title
    this.title.setTitle(
      'Digital Thermostat UAE | Advanced HVAC Control | MEPTECH',
    );

    // ✅ Meta Description
    this.meta.updateTag({
      name: 'description',
      content:
        'Choose digital thermostats in UAE for precise control. Enjoy energy efficiency, user-friendly design, and reliable HVAC temperature management solutions.',
    });

    // ✅ Keywords
    this.meta.updateTag({
      name: 'keywords',
      content:
        'digital thermostat UAE, HVAC thermostat UAE, room thermostat Dubai, smart thermostat UAE, temperature control systems UAE',
    });

    // ✅ Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: 'Digital Thermostat UAE | Advanced HVAC Control | MEPTECH',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Choose digital thermostats in UAE for precise control. Enjoy energy efficiency, user-friendly design, and reliable HVAC temperature management solutions.',
    });
  }

  product = {
    mainImg: '/products/thermostat2/main.png',
    name: 'Thermostat',
    short:
      'Enjoy intuitive controls in a sleek and elegant design with this award-winning compact wired room thermostat',

    subImg: '/products/thermostat2/1.png',

    features: [
      'Visual interface simplifies advanced settings such as scheduling, energy-saving modes, and restrictions',
      'Quick and easy commissioning, saving installation time and cost',
      'Bluetooth® Low Energy technology enabled',
      'Sleek and elegant modern design',
      'Intuitive touch-button control',
      'Two display modes: standard and detailed',
      'Direct access to key functions (on/off, temperature setpoint, mode, fan speed, louvre control, filter reset, error codes)',
      'Available in two colours to match interiors',
      'Compact size: 85 x 85 mm',
      'Advanced configuration via smartphone',
    ],

    subImg2: '/products/thermostat2/2.png',
    subImg3: '/products/thermostat2/3.png',
  };
}
