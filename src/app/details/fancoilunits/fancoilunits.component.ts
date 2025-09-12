import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from "../shared/product-card/product-card.component";

@Component({
  selector: 'app-fancoilunits',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './fancoilunits.component.html',
  styleUrl: './fancoilunits.component.css'
})
export class FancoilunitsComponent {

  product = {
    mainImg: '/products/fancoil/main.png',
    name: 'Fan coil units',
    about: 'Fan coils are distributed heating and cooling equipment designed to condition the air space they serve. A fan coil unit can either be exposed or recessed. An exposed unit features a painted metal cabinet. A recessed fan coil unit is covered with a wall plate or uses ductwork connected to the conditioned space. Our fan coil units come in three basic configurations: horizontal in or along the ceiling, vertical running the height of the wall, and unit heaters low along the wall.',
    cards: [
      {
        head: 'Versatile Installation Option',
        points: [
          'Daikin fan coils can be installed as cassette, exposed ceiling, concealed ceiling, floor-mounted, or wall-mounted units, fitting any space.'
        ]
      },
      {
        head: 'Energy Efficency',
        points: [
          'Daikin fan coils use advanced technology to maximize energy efficiency and reduce environmental impact, saving costs and supporting sustainability.'
        ]
      }
    ],
    groups: [
      {
        name: 'Cassette Fan coil units',
        points: [
          'Compact design',
          'Fresh Air Intake',
          'Stylish & Slim Panel',
          'Built-in high head drain pump and water flow switch',
          '4-way air discharge & air swing',
          'Valve or valve less control options',
          'Branch duct connection',
          'Sleep function for cool and heat mode',
          'Auto restart with last-state memory',
          'NIM-able',
          'Self-diagnosis features',
          'Choices of wired or wireless remote controller',
          'Optimum air discharge',
          'Branch duct connection',
          'Low height design',
          'Valve or valveless control options',
          'Auto restart with last-state memory',
          'Sleep function for cool and heat mode',
          'Choices of wired or wireless remote controller',
          'Modulating fan speed control'
        ],
        img: '/products/fancoil/1.png'
      },
      {
        name: 'Concealed Ceiling Fan coil units',
        points: [
          'Compact dimensions, unit height for ceiling mounting Only 212 mm Blowing distance up to 16.5 m',
          'Automatic air emissions',
          'Ceiling and wall-mounting option',
          'Sleep function for cooling and heating mode',
          'Saranet easily removable air filter for maintenance'
        ],
        img: '/products/fancoil/2.png'
      },
      {
        name: 'Ceiling Exposed Fan coil units',
        points: [
          'Excellent air distribution',
          'Compact design',
          'High capacity range',
          'High external static pressure range',
          'Double protection drainage',
          'Easy to service',
          'Left/right piping option',
          '4 useable fan speed',
          'Self-diagnosis features',
          'NIM-able',
          'Valve or valveless control options',
          'Auto restart with last-state memory',
          'Choices of wired or wireless remote controller',
          'Low sound design',
          'Powerful selection software',
          'Valve or valveless control options',
          'Anti-leakage',
          'High efficiency',
          'High CFM range',
          'Easy to service'
        ],
        img: '/products/fancoil/3.png'
      },
      {
        name: 'Floor Mounted Fan Coil Units',
        points: [
          'Fast-on connections for electrical options: no tools needed',
          'The air filter can easily be removed for cleaning',
          'Electric heater: no relay up to 2kW capacity',
          'Electric heater: equipped with two overheat cut-out thermostats',
          'Pre-assembled 3-way/4-port on/off valves are available',
          'Valve packages are insulated, no extra drain pan required',
          'Valve packages contain balancing valves and sensor pocket'
        ],
        img: '/products/fancoil/4.png'
      },
      {
        name: 'Wall Mounted Fan Coil Units',
        points: [
          'Powerful Cooling',
          'Turbo',
          'Motion Detection Sensor',
          'Long Airflow',
          'Energy Saving',
          'Silence',
          '3-D Airflow',
          'Econo Mode'
        ],
        img: '/products/fancoil/5.png'
      }
    ]
  }

}
