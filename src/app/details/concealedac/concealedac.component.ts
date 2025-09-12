import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from "../shared/product-card/product-card.component";
import { BenefitsComponent } from "../shared/benefits/benefits.component";

@Component({
  selector: 'app-concealedac',
  imports: [CommonModule, ProductCardComponent, BenefitsComponent],
  templateUrl: './concealedac.component.html',
  styleUrl: './concealedac.component.css'
})
export class ConcealedacComponent {

  product = {
    mainImg: '/products/concealedac/main.png',
    name: 'Concealed AC Unit',
    short: 'Efficient Concealed Daikin Ducted Air Conditioners for home ',
    about: 'A Daikin ducted air conditioner consists of an indoor and outdoor unit and flexible ducting. The indoor unit is concealed out of sight in your ceiling or under the floor, with flexible ducting distributing conditioned air through vents located throughout your home. An outdoor unit is positioned in a discreet location outside your home.',
    benifits: [
      'Tropical Compressor', 'Long Air Flow', 'User Friendly',
      'R-32', 'Energy Saving', 'R-410A', 'Inverter Technology',
      'Silence', 'Poweful cooling'
    ],
    cards: [
      {
        head: 'Flexibility',
        points: [
          "Daikin ducted heat pumps give you the flexibility to heat or cool every room in your home. Your home can be 'zoned' to maximize energy efficiency and customize your air conditioner's operation to suit your lifestyle - and how you 'zone' your home is completely up to you"
        ]
      },
      {
        head: 'MEPS Compliant',
        points: [
          "Daikin ducted heat pumps give you the flexibility to heat or cool every room in your home. Your home can be 'zoned' to maximize energy efficiency and customize your air conditioner's operation to suit your lifestyle - and how you 'zone' your home is completely up to you."
        ]
      },
      {
        head: 'Inverter Technology',
        points: [
          "An inverter based system continually adjusts its cooling and heating output in accordance with the temperature in the room.  When the desired temperature is reached, inverter technology ensures it is constantly maintained - keeping you comfortable and at the same time running more efficiently."
        ]
      },
      {
        head: 'Compact Design',
        points: [
          "Our ducted indoor units are designed to be fitted into tight roof spaces, the indoor unit can be separated into two sections making it light to carry and easier to maneuver through openings and in the ceilings."
        ]
      }
    ]
  }

}
