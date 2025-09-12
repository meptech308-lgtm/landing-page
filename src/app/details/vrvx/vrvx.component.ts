import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from "../shared/product-card/product-card.component";
import { RandomlistComponent } from "../randomlist/randomlist.component";

@Component({
  selector: 'app-vrvx',
  imports: [CommonModule, ProductCardComponent, RandomlistComponent],
  templateUrl: './vrvx.component.html',
  styleUrl: './vrvx.component.css'
})
export class VrvxComponent {

  product = {
    mainImg: '/products/vrvx/main.png',
    name: 'VRV X',
    short: 'The new VRV X Cooling Only system now features VRT technology in IDU & ODU. VRT automatically adjusts refrigerant temperature to individual building load and climate requirement, thus further this technology, running costs are reduced',
    about: 'First launched in Japan in 1982, the Daikin VRV system has been embraced by the world markets for over three decades. Now, we at Daikin introduce the next generation VRV X Cooling Only System to reinforce our industry leadership. The system offers an enhanced lineup to meet an ever-widening variety of needs, while improving energy savings, comfort and ease of installation.',
    cards: [
      {
        head: 'Extra Power Saving',
        points: [
          'New heights in energy efficiency during actual operation',
          'New Scroll Compressor',
          'Back pressure control mechanism',
          'Advanced oil temperature control',
          'VRV + VRT + VAV',
          'Higher efficiency is provided during rated operation'
        ]
      },
      {
        head: 'Excellent Technology',
        points: [
          'Large capacity all DC inverter compressor in compact casing',
          'Highly integrated heat exchanger',
          '4D Inverter Technology',
          'Excellent Performance and Comfort'
        ]
      },
      {
        head: 'Extended Reliability',
        points: [
          'Automatic Refrigerant Charge Function',
          'Multiple Advanced Features Ensuring More Accurate Test Operation And Stable System',
          'Free Phase Technology',
          'Ease of Maintenance'
        ]
      },
      {
        head: 'Extensive Range',
        points: [
          'INDOOR UNIT LINEUP',
          'OUTDOOR UNIT LINEUP'
        ]
      }
    ]
  }

}
