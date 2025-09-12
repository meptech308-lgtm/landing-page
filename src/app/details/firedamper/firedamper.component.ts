import { Component } from '@angular/core';
import { ImageComponent } from "../shared/image/image.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-firedamper',
  imports: [ImageComponent, CommonModule],
  templateUrl: './firedamper.component.html',
  styleUrl: './firedamper.component.css'
})
export class FiredamperComponent {

  product = {
    mainImg: '/products/firedamper/main.png',
    name: 'Fire Damper',
    short: `The dampers avoid the spread of fire through the ducts of heating , ventilation, and AC, helping to prevent a fire from spreading across the rest of the house.  
Folding blade fire, a damper is designed to prevent fire from spreading through ducts, walls , ceilings, doors, partition walls or floors
We can supply a fire damper to build into masonry, floors, walls and other areas. We are committed to client satisfaction, which is why we also tailor fire dampers to your specific requirements regarding size and application. As part of our customized solutions, we offer fire dampers in different sizes, models, dimensions and so forth.
Besides fire dampers, we offer several other air control solutions. Do go through our website for a picture of what we offer for air control and safety`,
    images: [
      {
        img: '/products/firedamper/1.png',
        head: 'TFH'
      },
      {
        img: '/products/firedamper/2.png',
        head: 'TFI'
      },
      {
        img: '/products/firedamper/3.png',
        head: 'TFH'
      },
      {
        img: '/products/firedamper/4.png',
        head: 'TFL'
      },
      {
        img: '/products/firedamper/5.png',
        head: 'TF0'
      },
      {
        img: '/products/firedamper/6.png',
        head: 'TFC'
      },
    ]
  }

}
