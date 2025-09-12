import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeaturesComponent } from "../shared/features/features.component";

@Component({
  selector: 'app-thermostat2',
  imports: [CommonModule, FeaturesComponent],
  templateUrl: './thermostat2.component.html',
  styleUrl: './thermostat2.component.css'
})
export class Thermostat2Component {

  product = {
    mainImg: '/products/thermostat2/main.png',
    name: 'Thermostat',
    short: 'Enjoy intuitive controls in a sleek and elegant design with this award-winning compact wired room thermostat',
    subImg: '/products/thermostat2/1.png',
    features: [
      'Visual interface simplifies advanced settings such as schedule setting, energy saving activation, setting restrictions, etc.',
      'Easy and quick commissioning, saves time and cost for installers',
      'Featuring Bluetooth® low energy technology',
      'Sleek and elegant design',
      'Inuitive touch-button control',
      'Two display options: standard and detailed',
      'Direct access to basic functions (on/off, set point, mode, target values,fan speed, louvres, filter icon & reset, error & code)',
      'Two colours to match any interior',
      'Compact, measures only 85 x 85 mm',
      'Advanced settings and commissioning via smartphone'
    ],
    subImg2: '/products/thermostat2/2.png',
    subImg3: '/products/thermostat2/3.png'
  }

}
