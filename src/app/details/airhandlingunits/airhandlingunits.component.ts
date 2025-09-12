import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from "../shared/product-card/product-card.component";
import { FeaturesComponent } from "../shared/features/features.component";

@Component({
  selector: 'app-airhandlingunits',
  imports: [CommonModule, ProductCardComponent, FeaturesComponent],
  templateUrl: './airhandlingunits.component.html',
  styleUrl: './airhandlingunits.component.css'
})
export class AirhandlingunitsComponent {

  product = {
    mainImg: '/products/airhandling/main.png',
    name: 'Air Handling Units',
    short: 'From medium-sized heat recovery ventilation to large-scale air handling units, we ensure optimal climate conditions by providing a fresh, healthy, and comfortable environment for buildings of all sizes and different applications.',
    cards: [
      {
        head: 'Pioneering Innovation',
        points: [
          'With five decades of AHU expertise, we lead in sustainable, advanced HVAC solutions, offering the first R-32 compatible systems.'
        ]
      },
      {
        head: 'One Stop Contact',
        points: [
          'Complete solutions for heating, cooling, ventilation, and digital control.'
        ]
      },
      {
        head: 'Energy Efficency',
        points: [
          'Highly efficient, energy-saving operations, supporting your building’s decarbonisation goals.'
        ]
      }
    ],
    features: [
      'Top-tier solutions: Achieve high energy efficiency and lower CO2 footprint across all segments and every step of your HVAC system.',
      'Seamless integration and communication: Ensure every component works in harmony; integrating AHU with a heat recovery system is even more effective.',
      'One-stop contact: Get everything you need from design support to spare parts and service, reducing time and effort lost in contacting multiple suppliers.',
      'Easier and faster commissioning: Enjoy reliable operation with pre-programmed, configured, and factory-tested controls, not only enhance the operational reliability but also save time and reduce manpower costs during installation, commissioning and also maintainance.'
    ]
  }

}
