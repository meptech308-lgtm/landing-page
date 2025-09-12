import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BenefitsComponent } from "../shared/benefits/benefits.component";
import { ProductCardComponent } from "../shared/product-card/product-card.component";

@Component({
  selector: 'app-rooftoppackage',
  imports: [CommonModule, BenefitsComponent, ProductCardComponent],
  templateUrl: './rooftoppackage.component.html',
  styleUrl: './rooftoppackage.component.css'
})
export class RooftoppackageComponent {

  product = {
    mainImg: '/products/rooftoppackage/main.png',
    name: 'Roof top Package',
    short: 'Rooftop systems offer a flexible way to provide treated air for one- to eight-story buildings. Many options and configurations are available to satisfy a wide number of applications. Fresh outside air is mixed with return air from the occupied space and then filtered, conditioned, and supplied back into the building.',
    about: 'A rooftop air conditioning unit is a basic ‘plug and play’ solution, ideal for medium to large spaces where an economical yet effective system is required. As well as delivering heating and cooling, roof air conditioners provide the option to switch to ‘free cooling’ as an energy saving mode in mid-season.',
    benifits: [
      'High Efficiency', 'Independent Staged Cooling', 'Indoor air quality',
      'Corrosion Protection', 'Wide Range', 'Auto Restart', 'Phase Protection',
      'High Ambient', 'Coil Guard', 'External Service', 'Compact and Light',
      'Controller Features', 'Proven Performances', 'Flexibility of Air supply',
      'Dust Proof'
    ],
    cards: [
      {
        head: 'Free Cooling Energy Saving Option',
        points: [
          'Rooftop air conditioning units can be equipped with an economiser option enabling ‘free cooling’ when the outside temperature is lower than the inside temperature, which means the outdoor air can be used as free source of cooling.'
        ]
      },
      {
        head: 'Plud and Play Installation',
        points: [
          'Ventilation systems bring fresh outdoor air indoors, remove stale air and balance the humidity levels. These actions are crucial for maintaining a comfortable and healthy environment inside your building.'
        ]
      },
      {
        head: 'Fresh Air Ventilation',
        points: [
          'A fresh air ventilation option is also available to maintain a high quality indoor environment. This uses CO2 sensors to monitor the air quality and to regulate the amount of incoming fresh air.'
        ]
      }
    ]
  }

}
