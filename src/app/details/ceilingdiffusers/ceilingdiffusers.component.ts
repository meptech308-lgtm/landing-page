import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImageComponent } from '../shared/image/image.component';
import { FeaturesComponent } from '../shared/features/features.component';
import { RandomlistComponent } from '../randomlist/randomlist.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ceilingdiffusers',
  standalone: true,
  imports: [
    CommonModule,
    ImageComponent,
    FeaturesComponent,
    RandomlistComponent,
  ],
  templateUrl: './ceilingdiffusers.component.html',
  styleUrl: './ceilingdiffusers.component.css',
})
export class CeilingdiffusersComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    // ✅ SEO Title
    this.title.setTitle(
      'Ceiling Diffusers UAE | Efficient Air Distribution | MEPTECH',
    );

    // ✅ Meta Description
    this.meta.updateTag({
      name: 'description',
      content:
        'Upgrade airflow with ceiling diffusers in UAE. Ensure uniform air distribution, modern design, and efficient HVAC performance for commercial and residential spaces.',
    });

    // ✅ Optional Keywords
    this.meta.updateTag({
      name: 'keywords',
      content:
        'ceiling diffusers UAE, air diffusers UAE, HVAC air distribution UAE, diffuser grille UAE, ventilation diffusers Dubai',
    });

    // ✅ Open Graph (for sharing)
    this.meta.updateTag({
      property: 'og:title',
      content: 'Ceiling Diffusers UAE | Efficient Air Distribution | MEPTECH',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Upgrade airflow with ceiling diffusers in UAE. Ensure uniform air distribution, modern design, and efficient HVAC performance for commercial and residential spaces.',
    });
  }

  product = {
    mainImg: '/products/ceilingdiffu/main.png',
    name: 'Ceiling diffusers',
    short:
      'We provide best quality of ac ceiling diffuser manufacturer in UAE, the ceiling diffusers from TECNALCO have been designed to deal with a broad spectrum of airflows and to maintain high air diffusion efficiency in the occupied areas. For supply, return and exhaust air applications can be used. Since the air discharge in this kind is horizontal close to the ceiling, the warmest air in the space blends with the cool primary air well above the occupied zone instantly. This type of air outlet is also capable of handling vast volumes of air at high temperatures. It is built to match any type of architectural designed ceiling with a pleasing appearance.',
    images: [
      { img: '/products/ceilingdiffu/1.png', head: 'CDR – 1way' },
      { img: '/products/ceilingdiffu/2.png', head: 'CDR-4-Way' },
      { img: '/products/ceilingdiffu/3.png', head: 'SLD-TS-3SLOT' },
      { img: '/products/ceilingdiffu/4.png', head: 'CDR-EC' },
      { img: '/products/ceilingdiffu/5.png', head: 'CDR-2-way' },
      { img: '/products/ceilingdiffu/6.png', head: 'CDS' },
      { img: '/products/ceilingdiffu/7.png', head: 'CDS-C' },
      { img: '/products/ceilingdiffu/8.png', head: 'CDS-E' },
      { img: '/products/ceilingdiffu/9.png', head: 'CDR-3-Way' },
      {
        img: '/products/ceilingdiffu/10.png',
        head: 'CDS-with-lever-operated-type',
      },
      { img: '/products/ceilingdiffu/11.png', head: 'CDRS-D' },
    ],
    features: [
      'Supplies large volumes of conditioned air with low noise and pressure drop.',
      'High-quality aluminum construction for corrosion resistance and durability.',
      'Removable and interchangeable core for easy maintenance and flexibility.',
      'Rigid damper connection with optional spring clip fixation.',
      'Nylon-coated damper blades for smooth operation.',
      'Face-adjustable blades for airflow control.',
      'Foam gasket option to prevent air leakage.',
      'Suitable for lay-in type ceiling installations.',
      'Accessible frame and core design.',
      'Available in various rectangular sizes.',
    ],
  };
}
