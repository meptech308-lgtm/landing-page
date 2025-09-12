import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageComponent } from "../shared/image/image.component";
import { FeaturesComponent } from "../shared/features/features.component";

@Component({
  selector: 'app-ceilingdiffusers',
  imports: [CommonModule, ImageComponent, FeaturesComponent],
  templateUrl: './ceilingdiffusers.component.html',
  styleUrl: './ceilingdiffusers.component.css'
})
export class CeilingdiffusersComponent {

  product = {
    mainImg: '/products/ceilingdiffu/main.png',
    name: 'Ceiling diffusers',
    short: 'We provide best quality of ac ceiling diffuser manufacturer in UAE, the ceiling diffusers from TECNALCO have been designed to deal with a broad spectrum of airflows and to maintain high air diffusion efficiency in the occupied areas. For supply, return and exhaust air applications can be used. Since the air discharge in this kind is horizontal close to the ceiling, the warmest air in the space blends with the cool primary air well above the occupied zone instantly. This type of air outlet is also capable of handling vast volumes of air at high temperatures. It is built to match any type of architectural designed ceiling with a pleasing appearance.',
    images: [
      {
        img: '/products/ceilingdiffu/1.png',
        head: 'CDR – 1way'
      },
      {
        img: '/products/ceilingdiffu/2.png',
        head: 'CDR-4-Way'
      },
      {
        img: '/products/ceilingdiffu/3.png',
        head: 'SLD-TS-3SLOT'
      },
      {
        img: '/products/ceilingdiffu/4.png',
        head: 'CDR-EC'
      },
      {
        img: '/products/ceilingdiffu/5.png',
        head: 'CDR-2-way'
      },
      {
        img: '/products/ceilingdiffu/6.png',
        head: 'CDS'
      },
      {
        img: '/products/ceilingdiffu/7.png',
        head: 'CDS-C'
      },
      {
        img: '/products/ceilingdiffu/8.png',
        head: 'CDS-E'
      },
      {
        img: '/products/ceilingdiffu/9.png',
        head: 'CDR-3-Way'
      },
      {
        img: '/products/ceilingdiffu/10.png',
        head: 'CDS-with-lever-operated-type'
      },
      {
        img: '/products/ceilingdiffu/11.png',
        head: 'CDRS-D'
      },
    ],
    features: [
      'It can supply large volumes of conditioned air, acceptable sound levels and pressure drops, when over all dimensions of the diffuser are limited by modular ceiling systems or architectural considerations.',
      'The frames and blades are made with high quality aluminum extruded profiles and have the advantages of corrosion resistance and rigidity.',
      'Louver core types of aluminum pins with steel springs are connected or attached to the frame. The core can be removed and interchangeable for optimum versatility in installing , maintaining and modifying dampers.',
      'Damper is rigidly connected to the frame by rivets of aluminum. Optional fixation with spring clips.',
      'Damper blades are differentiated by nylon covers from their frame.',
      'After extracting the inner core, the screw of the opposite blade is worked on the face opening of the diffuser.',
      'As a choice to prevent leakage of air, a foam gasket is sealed around the back of the frame.',
      'Suitable for lay-in-type flush mounting.',
      'Accessible stamped frame and core.',
      'Optionally available in rectangular sizes.'
    ]
  }

}
