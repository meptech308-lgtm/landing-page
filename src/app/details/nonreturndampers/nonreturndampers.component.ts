import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageComponent } from "../shared/image/image.component";
import { FeaturesComponent } from "../shared/features/features.component";

@Component({
  selector: 'app-nonreturndampers',
  imports: [CommonModule, ImageComponent, FeaturesComponent],
  templateUrl: './nonreturndampers.component.html',
  styleUrl: './nonreturndampers.component.css'
})
export class NonreturndampersComponent {

  product = {
    mainImg: '/products/nonreturndam/main.png',
    name: 'Non Return Dampers',
    short: `Non-Return Damper is an HVAC damper being used in the places where only one direction is required to flow air. Depending on the application, non-return dampers may be placed on the wall or duct. They are most frequently used in the presence of fans where the blades are only opened when the fan starts and the blades close because the fans stop.
NRD type models are also named as ‘self closing dampers ‘or ‘Back pressure dampers ‘or gravity dampers or pressure relief dampers. These dampers are air operated, opening or closing dampers for intake, discharge and pressure relief vents in air conditioning systems.
Non-return dampers supply are intended for use in commercial air conditioning systems in the entry and discharge opening.
The blades of the non-return damper are kept in the open position by the airflow while the ventilation system is in operation.
The damper blades are automatically shut down when the device is turned off to prevent airflow reverse, thus ensuring that the air is shielded from untempered air, rain, and birds.`,
    features: [
      'Powder coated, galvanized or stainless steel fixed frame. Galvanized steel or aluminium blades.',
      'Horizontal or vertical mounting models',
      'Blades have a silicone seal that reduces the leak by blades',
      'Change the counterweight position to shift. Normal construction positions weights on the right side and, as an alternative, weights on the left side.',
      'Maximum duct pressure of 5000 Pa and maximum air velocity of 15 m / s for damper building.',
      'Range of function temperature up to + 100 ° C, optionally up to + 180 ° C',
      'Blades, depending on the air velocity, open entirely or at any angle. When there is steady air flow, the blades remain in the opening position without fluctuating. When the flow of air ceases, the blades close softly.',
      'Built to maintain a constant level of pressure within pressurized rooms when it reaches the target limit, by relieving excess air.',
      'Built typically on diesel generators, ventilation systems in plant rooms and exhaust ducting.'
    ],
    images: [
      {
        img: '/products/nonreturndam/1.png',
        head: 'NRD-TE'
      },
      {
        img: '/products/nonreturndam/2.png',
        head: 'NRD-TF'
      },
      {
        img: '/products/nonreturndam/3.png',
        head: 'NRD – TF WITH LINKAGE'
      },
      {
        img: '/products/nonreturndam/4.png',
        head: 'PRD-TD'
      },
      {
        img: '/products/nonreturndam/5.png',
        head: 'NRD-TI'
      },
      {
        img: '/products/nonreturndam/6.png',
        head: 'NRD -TE WITH LINKAGE'
      },
      {
        img: '/products/nonreturndam/7.png',
        head: 'NRDH-TF'
      },
      {
        img: '/products/nonreturndam/8.png',
        head: 'PRD-TF'
      },
      {
        img: '/products/nonreturndam/9.png',
        head: 'NRD-TD'
      },
      {
        img: '/products/nonreturndam/10.png',
        head: 'NRD – TD WITH LINKAGE'
      },
      {
        img: '/products/nonreturndam/11.png',
        head: 'PRD-TE'
      },
    ]
  }

}
