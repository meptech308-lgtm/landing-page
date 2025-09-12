import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from "../shared/product-card/product-card.component";
import { RandomlistComponent } from "../randomlist/randomlist.component";

@Component({
  selector: 'app-controlunits',
  imports: [CommonModule, ProductCardComponent, RandomlistComponent],
  templateUrl: './controlunits.component.html',
  styleUrl: './controlunits.component.css'
})
export class ControlunitsComponent {

  product = {
    mainImg: '/products/controlunits/main.png',
    name: 'Control Units',
    short: 'Whether you are looking for a solution for your home or for your business, we offer a variety of systems that will help you take control of your climate and provide optimal comfort.',
    cards: [
      {
        head: 'Multi Site Control',
        points: [
          'Centralise the control of your various climate zones by connecting your intelligent Tablet Controller to our Daikin Cloud.',
          'Simultaneously monitor and benchmark multiple locations to reduce high energy consumption ',
          'Connect to the Daikin Cloud and access your units from any location at any time',
          'Intuitive touchscreen interface guarantees easy climate control ',
          'Ideal for small to medium-sized commercial applications'
        ]
      },
      {
        head: 'Building Management System',
        points: [
          'Our intuitive and user-friendly intelligent Touch Manager integrates seamlessly with 3rd party equipment, so that you can control your climate, lighting, alarms and more with a single interface. ',
          'Monitor your energy consumption, optimise your energy use and reduce your energy costs ',
          `Modular design allows you to match the Intelligent Touch Manager to your building's size and needs `,
          'Integrate with our Daikin i-Net for 24/7 remote monitoring to keep your Daikin system running smoothly and efficiently',
          'Easy-to-use energy data trending and analytic tools leading to savings of up to 15%',
          'Ideal for medium to large commercial applications'
        ]
      },
      {
        head: 'Individual Control System',
        points: [
          'Individual control systems allow you to control your climate directly with user-friendly interfaces and scheduling functions.',
          'Intuitive interfaces make controlling your climate easy ',
          'Contemporary designs blend in seamlessly with your interior '
        ]
      },
      {
        head: 'Cloud Controls',
        points: [
          'Remote monitoring, control and service for commercial and industrial cooling, heating and ventilation systems.',
          'Monitor and control your building no matter where you are',
          'Manage multiple sites. Modular concept allows your cloud to grow with your business',
          'Helps you reduce energy costs and increase the lifetime of your equipment.'
        ]
      }
    ]
  }

}
