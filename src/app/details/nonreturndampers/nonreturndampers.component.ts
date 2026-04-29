import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImageComponent } from '../shared/image/image.component';
import { FeaturesComponent } from '../shared/features/features.component';
import { RandomlistComponent } from '../randomlist/randomlist.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-nonreturndampers',
  standalone: true,
  imports: [
    CommonModule,
    ImageComponent,
    FeaturesComponent,
    RandomlistComponent,
  ],
  templateUrl: './nonreturndampers.component.html',
  styleUrl: './nonreturndampers.component.css',
})
export class NonreturndampersComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    // ✅ SEO Title
    this.title.setTitle(
      'Non Return Dampers UAE | Reliable Backflow Control | MEPTECH',
    );

    // ✅ Meta Description
    this.meta.updateTag({
      name: 'description',
      content:
        'Prevent air backflow with non return dampers in UAE. Ensure reliable HVAC performance, system protection, and efficient airflow control for all setups.',
    });

    // ✅ Keywords
    this.meta.updateTag({
      name: 'keywords',
      content:
        'non return dampers UAE, backdraft damper UAE, NRD UAE, airflow control dampers UAE, HVAC dampers Dubai',
    });

    // ✅ Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: 'Non Return Dampers UAE | Reliable Backflow Control | MEPTECH',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Prevent air backflow with non return dampers in UAE. Ensure reliable HVAC performance, system protection, and efficient airflow control for all setups.',
    });
  }

  product = {
    mainImg: '/products/nonreturndam/main.png',
    name: 'Non Return Dampers',
    short: `Non-Return Dampers are HVAC components designed to allow airflow in one direction only. They are commonly installed in ducts or walls and are widely used with fans, where blades open during operation and close automatically when the fan stops.

Also known as backdraft dampers or gravity dampers, these units prevent reverse airflow, protecting systems from unconditioned air, rain, and external contaminants. They are ideal for intake, discharge, and pressure relief applications in commercial HVAC systems.`,

    features: [
      'Available in powder-coated, galvanized, or stainless steel construction.',
      'Supports both horizontal and vertical mounting configurations.',
      'Silicone blade seals to reduce air leakage.',
      'Adjustable counterweight positioning for operational flexibility.',
      'Handles duct pressure up to 5000 Pa and air velocity up to 15 m/s.',
      'Operating temperature up to +100°C (optional up to +180°C).',
      'Blades open proportionally with airflow and close smoothly when airflow stops.',
      'Helps maintain pressure balance in controlled environments.',
      'Widely used in generator rooms, ventilation systems, and exhaust ducts.',
    ],

    images: [
      { img: '/products/nonreturndam/1.png', head: 'NRD-TE' },
      { img: '/products/nonreturndam/2.png', head: 'NRD-TF' },
      { img: '/products/nonreturndam/3.png', head: 'NRD-TF with Linkage' },
      { img: '/products/nonreturndam/4.png', head: 'PRD-TD' },
      { img: '/products/nonreturndam/5.png', head: 'NRD-TI' },
      { img: '/products/nonreturndam/6.png', head: 'NRD-TE with Linkage' },
      { img: '/products/nonreturndam/7.png', head: 'NRDH-TF' },
      { img: '/products/nonreturndam/8.png', head: 'PRD-TF' },
      { img: '/products/nonreturndam/9.png', head: 'NRD-TD' },
      { img: '/products/nonreturndam/10.png', head: 'NRD-TD with Linkage' },
      { img: '/products/nonreturndam/11.png', head: 'PRD-TE' },
    ],
  };
}
