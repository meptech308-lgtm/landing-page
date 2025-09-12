import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from "../shared/product-card/product-card.component";

@Component({
  selector: 'app-wallsplit',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './wallsplit.component.html',
  styleUrl: './wallsplit.component.css'
})
export class WallsplitComponent {

  product = {
    mainImg: '/products/wallsplit/main.png',
    name: 'Wall Split',
    short: 'Daikin Multi Split Systems can heat or cool multiple rooms using only one outdoor unit connected to multiple indoor units. Each indoor unit can also be individually controlled, scheduled and set to the desired room temperature.',
    cards: [
      {
        head: 'Humidifying / Dehumidifying',
        points: [
          'There are Daikin heat pump ranges for both extremely hot and cold outdoor temperatures, so you always enjoy the perfect climate indoors.'
        ]
      },
      {
        head: 'Quiet Operation',
        points: [
          'Our indoor units are whisper quiet for perfect comfort.'
        ]
      },
      {
        head: 'Heat Pump Performance',
        points: [
          'To give you the best in convenience and comfort, Daikin technology manages humidity at any temperature without needing an additional water tank.'
        ]
      },
      {
        head: 'Inverter Technology',
        points: [
          'Inverter technology in air conditioners is used to regulate the indoor temperature continuously. Compared with a traditional system, it gives you optimum comfort as well as reducing your energy costs by 30%.'
        ]
      }
    ]
  }

}
