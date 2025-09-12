import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeaturesComponent } from "../shared/features/features.component";
import { RandomlistComponent } from "../randomlist/randomlist.component";

@Component({
  selector: 'app-ecologyunit',
  imports: [CommonModule, FeaturesComponent, RandomlistComponent],
  templateUrl: './ecologyunit.component.html',
  styleUrl: './ecologyunit.component.css'
})
export class EcologyunitComponent {

  product = {
    mainImg: '/products/ecologyunit/main.png',
    name: 'Ecology Unit',
    short: 'Tecnalco Ecology Unit, a Pollution Control Unit that removes the odor, smoke, oil, and grease particles from commercial kitchens. The unit is an integral part of the commercial kitchens serving hotels, restaurants, food courts, corporate canteens, hospitals, and the food industry.',
    features: [
      'Airflow range : 1000 CFM – 30000 CFM',
      'Unit Colour : RAL 7047 as standard',
      'Frame : Extruded Anodized Aluminium with plain Profile',
      'Casing/Panels : Double skin with Galvanised steel sheet at 45mm & 25mm',
      'Insulation: Polyurethane foam & Rockwool.',
      'Filters are as per EN 779/ ISO 16890',
      'UL listed/Eurovent certified Filters',
      'UL listed Electro static precipitator',
      'AMCA Certified Centrifugal Fans',
      'Fire rated Fans available (200°C @ 2hrs / 400°C @ 2hr)',
      'VFD Compactible Motors available with IP55 as standard',
      'IE2/IE3 Motors available'
    ],
    subImages: [
      '/products/ecologyunit/2.png',
      '/products/ecologyunit/1.png'
    ]
  }

}
