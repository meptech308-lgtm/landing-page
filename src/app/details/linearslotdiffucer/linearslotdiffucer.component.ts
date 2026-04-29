import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImageComponent } from '../shared/image/image.component';
import { RandomlistComponent } from '../randomlist/randomlist.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-linearslotdiffucer',
  standalone: true,
  imports: [CommonModule, ImageComponent, RandomlistComponent],
  templateUrl: './linearslotdiffucer.component.html',
  styleUrl: './linearslotdiffucer.component.css',
})
export class LinearslotdiffucerComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {

    this.title.setTitle(
      'Linear Slot Diffuser UAE | Premium Airflow Design | MEPTECH',
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Install linear slot diffusers in UAE for stylish airflow. Achieve precise air distribution, modern aesthetics, and efficient HVAC performance in any space.',
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'linear slot diffuser UAE, slot diffuser UAE, HVAC diffusers UAE, air distribution UAE, ceiling slot diffuser Dubai',
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Linear Slot Diffuser UAE | Premium Airflow Design | MEPTECH',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Install linear slot diffusers in UAE for stylish airflow. Achieve precise air distribution, modern aesthetics, and efficient HVAC performance in any space.',
    });
  }

  product = {
    mainImg: '/products/linearslot/main.png', // ✅ FIXED PATH
    name: 'Linear Slot Diffuser',
    short:
      'MepTech modulinear slot diffusers are specially designed to provide supply or return air through ceiling. These are available in single as well as multiple slots opening. Modern concealed type Trimless models provide the best aesthetical look on the ceiling without compromising performance. Curved designs are also available, making them a preferred choice for modern architectural applications.',
    images: [
      {
        img: '/products/linearslot/1.png',
        head: 'SLD-TS-1SLOT',
      },
      {
        img: '/products/linearslot/2.png',
        head: 'SLD-TS-2SLOT',
      },
      {
        img: '/products/linearslot/3.png',
        head: 'SLD-TS-3SLOT',
      },
      {
        img: '/products/linearslot/4.png',
        head: 'SLD-TS-4SLOT',
      },
      {
        img: '/products/linearslot/5.png',
        head: 'SLD-TER-2SLOT',
      },
      {
        img: '/products/linearslot/6.png',
        head: 'SLD-TS-EF-2SLOT',
      },
    ],
  };
}
