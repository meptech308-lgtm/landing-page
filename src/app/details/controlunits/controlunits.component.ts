import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../shared/product-card/product-card.component';
import { RandomlistComponent } from '../randomlist/randomlist.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-controlunits',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RandomlistComponent],
  templateUrl: './controlunits.component.html',
  styleUrl: './controlunits.component.css',
})
export class ControlunitsComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    // ✅ SEO Title
    this.title.setTitle(
      'HVAC Control Units UAE | Smart System Management | MEPTECH',
    );

    // ✅ Meta Description
    this.meta.updateTag({
      name: 'description',
      content:
        'Enhance HVAC efficiency with control units in UAE. Get smart system management, automation, and reliable performance for advanced building environments.',
    });

    // ✅ Keywords
    this.meta.updateTag({
      name: 'keywords',
      content:
        'HVAC control units UAE, building management system UAE, HVAC automation UAE, smart HVAC controls Dubai, climate control systems UAE',
    });

    // ✅ Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: 'HVAC Control Units UAE | Smart System Management | MEPTECH',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Enhance HVAC efficiency with control units in UAE. Get smart system management, automation, and reliable performance for advanced building environments.',
    });
  }

  product = {
    mainImg: '/products/controlunits/main.png',
    name: 'Control Units',
    short:
      'Whether you are looking for a solution for your home or business, we offer a wide range of HVAC control systems that provide precise climate management, improved comfort, and energy efficiency across various applications.',

    cards: [
      {
        head: 'Multi Site Control',
        points: [
          'Centralise control of multiple climate zones via intelligent tablet controller and Daikin Cloud',
          'Monitor and benchmark multiple locations to reduce energy consumption',
          'Access and control your HVAC systems remotely from anywhere',
          'Intuitive touchscreen interface for easy operation',
          'Ideal for small to medium commercial applications',
        ],
      },
      {
        head: 'Building Management System',
        points: [
          'Integrates HVAC, lighting, alarms, and more into a single interface',
          'Monitor and optimise energy consumption to reduce operational costs',
          'Modular design adapts to building size and requirements',
          '24/7 remote monitoring via Daikin i-Net',
          'Advanced analytics tools with potential energy savings up to 15%',
          'Ideal for medium to large commercial applications',
        ],
      },
      {
        head: 'Individual Control System',
        points: [
          'User-friendly interfaces for direct climate control',
          'Scheduling functions for efficient operation',
          'Modern designs that integrate seamlessly into interiors',
        ],
      },
      {
        head: 'Cloud Controls',
        points: [
          'Remote monitoring, control, and servicing of HVAC systems',
          'Manage buildings and multiple sites from anywhere',
          'Scalable cloud-based system for growing businesses',
          'Helps reduce energy costs and extend equipment lifespan',
        ],
      },
    ],
  };
}
