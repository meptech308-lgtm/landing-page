import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageComponent } from "../shared/image/image.component";

@Component({
  selector: 'app-linearslotdiffucer',
  imports: [CommonModule, ImageComponent],
  templateUrl: './linearslotdiffucer.component.html',
  styleUrl: './linearslotdiffucer.component.css'
})
export class LinearslotdiffucerComponent {

  product = {
    mainImg: './products/linearslot/main.png',
    name: 'Linear Slot Diffuser',
    short: 'MepTech modulinear slot diffusers are specially designed to provide supply or return air through ceiling. These are available in single as well as multiple slots opening. Modern concealed type Trimless models provides the best aesthetical look on the ceiling without compromising in the performance.These are available in curved designs as well which are today the first choice of architecture designers.',
    images: [
      {
        img: '/products/linearslot/1.png',
        head: 'SLD-TS-1SLOT'
      },
      {
        img: '/products/linearslot/2.png',
        head: 'SLD-TS-2Slot'
      },
      {
        img: '/products/linearslot/3.png',
        head: 'SLD-TS-3SLOT'
      },
      {
        img: '/products/linearslot/4.png',
        head: 'SLD-TS-4SLOT'
      },
      {
        img: '/products/linearslot/5.png',
        head: 'SLD-TER-2SLOT'
      },
      {
        img: '/products/linearslot/6.png',
        head: 'SLD-TS-EF-2SLOT'
      }
    ]
  }

}
