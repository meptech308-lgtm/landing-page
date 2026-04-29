import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImageComponent } from '../shared/image/image.component';
import { RandomlistComponent } from '../randomlist/randomlist.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-variablereturndamper',
  standalone: true,
  imports: [CommonModule, ImageComponent, RandomlistComponent],
  templateUrl: './variablereturndamper.component.html',
  styleUrl: './variablereturndamper.component.css',
})
export class VariablereturndamperComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    // ✅ SEO Title
    this.title.setTitle(
      'Variable Return Dampers UAE | Smart Air Control | MEPTECH',
    );

    // ✅ Meta Description
    this.meta.updateTag({
      name: 'description',
      content:
        'Optimize airflow with variable return dampers in UAE. Get smart air control, improved efficiency, and reliable HVAC performance for modern systems.',
    });

    // ✅ Keywords
    this.meta.updateTag({
      name: 'keywords',
      content:
        'variable return damper UAE, VAV dampers UAE, airflow control systems UAE, HVAC VAV systems Dubai, air balancing dampers',
    });

    // ✅ Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: 'Variable Return Dampers UAE | Smart Air Control | MEPTECH',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Optimize airflow with variable return dampers in UAE. Get smart air control, improved efficiency, and reliable HVAC performance for modern systems.',
    });
  }

  product = {
    mainImg: '/products/variablereturn/main.png',
    name: 'Variable Return Damper',
    short: `Variable Air Volume (VAV) systems regulate airflow from an Air Handling Unit (AHU) to meet varying heating and cooling demands across different zones in a building. These systems are widely used in commercial applications for efficient air distribution and energy savings.

VAV systems are classified into pressure-dependent and pressure-independent types. Pressure-dependent systems vary airflow based on duct pressure, which can lead to inconsistent temperatures and noise. In contrast, pressure-independent systems maintain constant airflow regardless of pressure variations, ensuring stable comfort and better control.

Constant Air Volume (CAV) systems, on the other hand, deliver a fixed airflow while adjusting temperature to meet thermal loads. VAV systems provide greater efficiency and flexibility for modern HVAC applications.`,

    images: [
      {
        img: '/products/variablereturn/1.png',
        head: 'Top By-Pass VAV TBP 501 Series',
      },
      {
        img: '/products/variablereturn/4.png',
        head: 'Pressure Dependent VAV TPD 600 Series',
      },
      {
        img: '/products/variablereturn/2.png',
        head: 'Pressure Independent VAV TPI 700 Series',
      },
      {
        img: '/products/variablereturn/5.png',
        head: 'Side By-Pass VAV TBP 502 Series',
      },
      {
        img: '/products/variablereturn/3.png',
        head: 'Constant Air Volume VAV TCV 800 Series',
      },
    ],
  };
}
