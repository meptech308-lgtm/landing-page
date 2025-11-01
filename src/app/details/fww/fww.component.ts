import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardWithImageComponent } from "../shared/product-card-with-image/product-card-with-image.component";
import { RandomlistComponent } from "../randomlist/randomlist.component";

@Component({
  selector: 'app-fww',
  imports: [CommonModule, ProductCardWithImageComponent, RandomlistComponent],
  templateUrl: './fww.component.html',
  styleUrl: './fww.component.css'
})
export class FwwComponent {

  product = {
    mainImg: '/products/fww/main.png',
    name: 'Chilled Water FCU',
    short: 'Adopts efficient heat exchange design and standardized production process. With the advanced motor control technology, the precise operation of the fan coil unit is guaranteed.',
    cards: [
      {
        img: '/products/fww/1.png',
        head: 'Centrifugual impeller',
        points: [
          'The double inlet double width(DWDI) centrifugal fan featuring high - efficiency wide - impeller and multi - blade forward - curved is adopted to implement low speed, large air flow and low noise.'
        ]
      },
      {
        img: '/products/fww/2.png',
        head: 'High-efficiency motor',
        points: [
          'High efficiency and energy saving, powerful, stable and quite operation; configuration of the international brand NSK bearing, ensuring efficient, safe and maintenance-free operation.'
        ]
      },
      {
        img: '/products/fww/3.png',
        head: 'Plastic-coated metal hose',
        points: [
          ' The cable protection pipe for the motor uses plastic-coated metal hose; the plastic-coated metal hose is light in weight and well flexible, with outstanding barrier property; The hose is resistant to corrosion, wear and high temperature; it has good insulation property and can better protect safety in use.'
        ]
      },
      {
        img: '/products/fww/4.png',
        head: 'Smart control (option)',
        points: [
          `Several types of thermostats options are offered to comply with 2-pipe and 4-pipe  system, they are wildly used for industrial, commerial and residential buildings, please refer to thermostat's catalog for detailed information.`
        ]
      },
      {
        img: '/products/fww/5.png',
        head: 'High-efficiency heat exchanger',
        points: [
          'Formed using high quality copper tubes and highly efficient hydrophilic aluminum fins through mechanical expansion joint to reduce heat resistance; Quasi counterflow fan coil design enables thorough heat exchange between air and water to guarantee high efficiency in heat exchange'
        ]
      },
      {
        img: '/products/fww/6.png',
        head: 'New self-slope drain pan',
        points: [
          'The self-slope structure design ensures quick drainage of condensate water; with spray on both sides for anti-corrosion, the tray surface is cleaner; the integrated design is adopted to avoid cold bridges.'
        ]
      },
      {
        img: '/products/fww/7.png',
        head: 'Manual air vent valve',
        points: [
          'The unit is configured with manual air vent valve for convenient operation, quicker discharge, and easier installation. The valve is placed at the highest point to guarantee thorough discharging of air in the system and ensure the heat exchange effect.'
        ]
      },
      {
        img: '/products/fww/8.png',
        head: '2-way/3-way valves (option)',
        points: [
          'FCV series 2-way/3-way valve including electric actuator can be provided as an option. The actuator takes small space which can be installed closed to the wall. It is reliable with high quality and super low noise.'
        ]
      },
    ]
  }

}
