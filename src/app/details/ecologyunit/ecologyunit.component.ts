import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FeaturesComponent } from '../shared/features/features.component';
import { RandomlistComponent } from '../randomlist/randomlist.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ecologyunit',
  standalone: true,
  imports: [CommonModule, FeaturesComponent, RandomlistComponent],
  templateUrl: './ecologyunit.component.html',
  styleUrl: './ecologyunit.component.css',
})
export class EcologyunitComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    // ✅ SEO Title
    this.title.setTitle(
      'Ecology Units UAE | Advanced Air Filtration Systems | MEPTECH',
    );

    // ✅ Meta Description
    this.meta.updateTag({
      name: 'description',
      content:
        'Improve air quality with ecology units in UAE. Remove pollutants, control emissions, and ensure efficient HVAC performance for commercial kitchens and spaces.',
    });

    // ✅ Keywords
    this.meta.updateTag({
      name: 'keywords',
      content:
        'ecology units UAE, kitchen exhaust filtration UAE, air pollution control units UAE, electrostatic precipitator UAE, HVAC filtration systems Dubai',
    });

    // ✅ Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: 'Ecology Units UAE | Advanced Air Filtration Systems | MEPTECH',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Improve air quality with ecology units in UAE. Remove pollutants, control emissions, and ensure efficient HVAC performance for commercial kitchens and spaces.',
    });
  }

  product = {
    mainImg: '/products/ecologyunit/main.png',
    name: 'Ecology Unit',
    short: `Tecnalco Ecology Units are advanced pollution control systems designed to remove odors, smoke, oil, and grease particles from commercial kitchen exhaust air. These units play a critical role in maintaining clean air and meeting environmental standards in high-demand applications.

They are widely used in hotels, restaurants, food courts, corporate kitchens, hospitals, and food processing industries, ensuring efficient filtration and safe exhaust discharge.`,

    features: [
      'Airflow range: 1000 CFM – 30000 CFM',
      'Standard unit color: RAL 7047',
      'Frame: Extruded anodized aluminium with robust profile',
      'Double skin casing with galvanized steel panels (45mm & 25mm)',
      'Insulation: Polyurethane foam & Rockwool',
      'Filters compliant with EN 779 / ISO 16890 standards',
      'UL listed / Eurovent certified filters',
      'UL listed electrostatic precipitator',
      'AMCA certified centrifugal fans',
      'Fire-rated fans available (200°C @ 2hrs / 400°C @ 2hrs)',
      'VFD compatible motors with IP55 as standard',
      'IE2 / IE3 high-efficiency motors available',
    ],

    subImages: ['/products/ecologyunit/2.png', '/products/ecologyunit/1.png'],
  };
}
