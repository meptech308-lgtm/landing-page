import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImageComponent } from '../shared/image/image.component';
import { RandomlistComponent } from '../randomlist/randomlist.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-volumecontrol',
  standalone: true,
  imports: [CommonModule, ImageComponent, RandomlistComponent],
  templateUrl: './volumecontrol.component.html',
  styleUrl: './volumecontrol.component.css',
})
export class VolumecontrolComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    // ✅ SEO Title
    this.title.setTitle(
      'Volume Control Dampers UAE | Precise Air Control | MEPTECH',
    );

    // ✅ Meta Description
    this.meta.updateTag({
      name: 'description',
      content:
        'Control airflow efficiently with volume control dampers in UAE. Improve HVAC performance with accurate air regulation and reliable system balancing.',
    });

    // ✅ Keywords
    this.meta.updateTag({
      name: 'keywords',
      content:
        'volume control dampers UAE, VCD UAE, HVAC dampers UAE, airflow control UAE, duct dampers Dubai',
    });

    // ✅ Open Graph (for sharing)
    this.meta.updateTag({
      property: 'og:title',
      content: 'Volume Control Dampers UAE | Precise Air Control | MEPTECH',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Control airflow efficiently with volume control dampers in UAE. Improve HVAC performance with accurate air regulation and reliable system balancing.',
    });
  }

  product = {
    mainImg: '/products/volumecontrol/main.png',
    name: 'Volume Control Damper',
    short:
      'Motorized smoke damper is an ideal life-safety equipment. It is typically installed in air transfer openings or HVAC duct systems to control airflow across different zones. It automatically closes when high temperatures are detected, preventing the spread of fire and ensuring safety.',
    images: [
      {
        img: '/products/volumecontrol/1.png',
        head: "VCD-'TO'O-Flange Type",
      },
      {
        img: '/products/volumecontrol/2.png',
        head: 'VCD-TO-P Flange Type',
      },
      {
        img: '/products/volumecontrol/3.png',
        head: "VCD-'TA'O-Flange Type",
      },
      {
        img: '/products/volumecontrol/4.png',
        head: 'VCD-TA-P Flange Type',
      },
      {
        img: '/products/volumecontrol/5.png',
        head: 'VCD-TGO',
      },
      {
        img: '/products/volumecontrol/6.png',
        head: 'Motorized Volume Control Dampers - Flange Type',
      },
      {
        img: '/products/volumecontrol/7.png',
        head: 'GI Ring',
      },
      {
        img: '/products/volumecontrol/8.png',
        head: 'Low Leakage VCD - Flange Type',
      },
      {
        img: '/products/volumecontrol/9.png',
        head: 'VCD-TR-H',
      },
      {
        img: '/products/volumecontrol/10.png',
        head: "VCD-'TA'P Box Type",
      },
      {
        img: '/products/volumecontrol/11.png',
        head: "VCD-TA'O'-S&C Type",
      },
      {
        img: '/products/volumecontrol/12.png',
        head: "VCD-'TO'O-SC Type",
      },
    ],
  };
}
