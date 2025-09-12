import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vrviv',
  imports: [CommonModule],
  templateUrl: './vrviv.component.html',
  styleUrl: './vrviv.component.css'
})
export class VrvivComponent {

  product = {
    mainImg: '/products/vrviv+/1.png',
    imgPoints: [
      {
        no: 1,
        head: 'DC fan motor',
        points: [
          'Increases efficiency',
          'Larger diameter of the rotor results in great force using the same magnetic field.',
          'Improved control results in more fan steps that match the actual capacity.'
        ]
      },
      {
        no: 2,
        head: 'Gas cooled PC',
        points: [
          'Reliable cooling is not influenced by ambient temperatures.',
          'A smaller switchbox creates a smoother airflow through the heat exchanger.'
        ]
      },
      {
        no: 3,
        head: '4-sided heat exchanger',
        points: [
          'A 50% increase in the heat exchange surface (235m2) increases efficiency by up to 30%.'
        ]
      },
      {
        no: 4,
        head: 'Newly developed compressor',
        points: [
          'UNIQUE back-pressure control preventing refrigerant leak and increasing efficiency in low load operation.',
          'Full inverter enables Variable Refrigerant Temperature and low start-up currents.',
          'Reluctance brushless DC motor increases efficiency when compared to AC motors by using simultaneous normal and reluctance torque.'
        ]
      }
    ],
    name: 'VRV IV +',
    short: 'Our new VRV IV heat recovery systems set pioneering  standards in all-round climate comfort performance.  Total design simplicity, offering rapid installation, full  f lexibility as well as absolute efficiency and comfort',
    work: 'Variable Refrigerant Temperature control for energy  saving in partial load condition. The capacity is controlled by the inverter compressor  AND variation of the evaporating (Te) and condens ing (Tc) temperature of the refrigerant in order to  achieve the highest seasonal efficiency',
    subImg: '/products/vrviv+/2.png'
  }

}
