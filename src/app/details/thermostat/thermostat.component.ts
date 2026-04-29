import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FeaturesComponent } from '../shared/features/features.component';
import { RandomlistComponent } from '../randomlist/randomlist.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-thermostat',
  standalone: true,
  imports: [CommonModule, FeaturesComponent, RandomlistComponent],
  templateUrl: './thermostat.component.html',
  styleUrl: './thermostat.component.css',
})
export class ThermostatComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    // ✅ SEO Title (FIXED)
    this.title.setTitle(
      'HVAC Thermostat UAE | Smart Temperature Control | MEPTECH',
    );

    // ✅ Meta Description (FIXED)
    this.meta.updateTag({
      name: 'description',
      content:
        'Upgrade comfort with HVAC thermostats in UAE. Get smart temperature control, energy savings, and reliable performance for residential and commercial systems.',
    });

    // ✅ Keywords
    this.meta.updateTag({
      name: 'keywords',
      content:
        'cross talk attenuators UAE, CTA UAE, HVAC acoustic solutions UAE, duct noise control UAE, sound attenuation HVAC Dubai',
    });

    // ✅ Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: 'Cross Talk Attenuators UAE | Acoustic HVAC Solutions | MEPTECH',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Reduce noise transfer with cross talk attenuators in UAE. Ensure acoustic isolation, efficient airflow, and improved HVAC performance for commercial spaces.',
    });
  }

  product = {
    mainImg: '/products/thermostat/main.png',
    name: 'Cross Talk Attenuators (CTA)',

    short: `MEPTECH manufactures Cross Talk Attenuators (CTA) to prevent noise transfer between interconnected spaces. These units provide low airflow resistance while maintaining high acoustic attenuation, making them ideal for maintaining sound isolation in HVAC systems.

CTA units are used where air passages penetrate acoustic barriers, such as walls and ceilings. Straight types are suitable for wall penetrations and inline duct installations, while Z-type attenuators are designed for wall-mounted applications.

The construction complies with DW142 Class B ductwork standards, ensuring durability and performance in commercial HVAC environments.`,

    features: [
      'Casing: Galvanized steel sheet (0.8 mm / 1.0 mm) as per BS2989 Grade Z2 G275, compliant with DW142 Class B.',
      'Baffles: Sandwich construction with galvanized sheet + perforated GI sheet filled with non-combustible acoustic insulation.',
      'Infill material has Class 1 fire rating as per BS476.',
      'Glass tissue facing ensures durability and containment of insulation.',
    ],

    table: [
      {
        srNo: 1,
        type: 'Straight',
        width: '300 mm',
        height: '200 mm',
        length: ['600 mm', '900 mm', '1800 mm'],
        dbReduction: [7, 12, 20],
      },
      {
        srNo: 2,
        type: 'Straight',
        width: '300 mm',
        height: '300 mm',
        length: ['600 mm', '900 mm', '1800 mm'],
        dbReduction: [8, 15, 20],
      },
      {
        srNo: 3,
        type: 'Straight',
        width: '300 mm',
        height: '400 mm',
        length: ['600 mm', '900 mm', '1800 mm'],
        dbReduction: [10, 20, 28],
      },
      {
        srNo: 4,
        type: 'Z-Type',
        width: '300 mm',
        height: '200 mm',
        length: ['600 mm', '900 mm', '1800 mm'],
        dbReduction: [23, 27, 22],
      },
      {
        srNo: 5,
        type: 'Z-Type',
        width: '300 mm',
        height: '300 mm',
        length: ['600 mm', '900 mm', '1800 mm'],
        dbReduction: [24, 28, 22],
      },
      {
        srNo: 6,
        type: 'Z-Type',
        width: '300 mm',
        height: '400 mm',
        length: ['600 mm', '900 mm', '1800 mm'],
        dbReduction: [25, 22, 29],
      },
    ],

    table2: [
      {
        srNo: 1,
        type: 'Straight',
        length: '600 mm',
        values: {
          '63Hz': 5,
          '125Hz': 7,
          '250Hz': 10,
          '500Hz': 15,
          '1K': 23,
          '2K': 17,
          '4K': 13,
          '8K': 11,
        },
      },
      {
        srNo: 2,
        type: 'Straight',
        length: '900 mm',
        values: {
          '63Hz': 6,
          '125Hz': 14,
          '250Hz': 17,
          '500Hz': 21,
          '1K': 28,
          '2K': 30,
          '4K': 25,
          '8K': 17,
        },
      },
      {
        srNo: 3,
        type: 'Straight',
        length: '1800 mm',
        values: {
          '63Hz': 10,
          '125Hz': 20,
          '250Hz': 26,
          '500Hz': 35,
          '1K': 39,
          '2K': 40,
          '4K': 39,
          '8K': 32,
        },
      },
      {
        srNo: 4,
        type: 'Z-Type',
        length: '600 mm',
        values: {
          '63Hz': 6,
          '125Hz': 8,
          '250Hz': 12,
          '500Hz': 16,
          '1K': 25,
          '2K': 28,
          '4K': 20,
          '8K': 17,
        },
      },
      {
        srNo: 5,
        type: 'Z-Type',
        length: '900 mm',
        values: {
          '63Hz': 7,
          '125Hz': 16,
          '250Hz': 21,
          '500Hz': 21,
          '1K': 36,
          '2K': 39,
          '4K': 36,
          '8K': 24,
        },
      },
      {
        srNo: 6,
        type: 'Z-Type',
        length: '1800 mm',
        values: {
          '63Hz': 11,
          '125Hz': 21,
          '250Hz': 28,
          '500Hz': 28,
          '1K': 39,
          '2K': 40,
          '4K': 39,
          '8K': 32,
        },
      },
    ],

    tableName: 'Dimensional and Noise Reduction',
    tableName2: 'Insertion Loss (dB)',
  };
}
