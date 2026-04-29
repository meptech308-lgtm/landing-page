import { Component, OnInit } from '@angular/core';
import { ImageComponent } from '../shared/image/image.component';
import { CommonModule } from '@angular/common';
import { RandomlistComponent } from '../randomlist/randomlist.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-firedamper',
  standalone: true,
  imports: [ImageComponent, CommonModule, RandomlistComponent],
  templateUrl: './firedamper.component.html',
  styleUrl: './firedamper.component.css',
})
export class FiredamperComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    // ✅ SEO Title
    this.title.setTitle(
      'Fire Dampers UAE | Certified HVAC Safety Systems | MEPTECH',
    );

    // ✅ Meta Description
    this.meta.updateTag({
      name: 'description',
      content:
        'Protect buildings with fire dampers in UAE. Ensure certified safety, fire resistance, and reliable HVAC system protection in commercial environments.',
    });

    // ✅ Keywords
    this.meta.updateTag({
      name: 'keywords',
      content:
        'fire dampers UAE, HVAC fire damper UAE, duct fire safety UAE, fire rated dampers Dubai, HVAC safety systems UAE',
    });

    // ✅ Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: 'Fire Dampers UAE | Certified HVAC Safety Systems | MEPTECH',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Protect buildings with fire dampers in UAE. Ensure certified safety, fire resistance, and reliable HVAC system protection in commercial environments.',
    });
  }

  product = {
    mainImg: '/products/firedamper/main.png',
    name: 'Fire Damper',
    short: `Fire dampers are essential safety components designed to prevent the spread of fire and smoke through HVAC duct systems. Installed within ducts, walls, ceilings, and floors, they automatically close when high temperatures are detected, helping to contain fire within a specific zone.

These dampers play a critical role in maintaining building safety by limiting fire propagation and protecting occupants and property. We offer a wide range of fire dampers tailored to different applications, including custom sizes and configurations to meet project-specific requirements.`,

    images: [
      { img: '/products/firedamper/1.png', head: 'TFH' },
      { img: '/products/firedamper/2.png', head: 'TFI' },
      { img: '/products/firedamper/3.png', head: 'TFH' },
      { img: '/products/firedamper/4.png', head: 'TFL' },
      { img: '/products/firedamper/5.png', head: 'TF0' },
      { img: '/products/firedamper/6.png', head: 'TFC' },
    ],
  };
}
