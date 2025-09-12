import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageComponent } from "../shared/image/image.component";

@Component({
  selector: 'app-volumecontrol',
  imports: [CommonModule, ImageComponent],
  templateUrl: './volumecontrol.component.html',
  styleUrl: './volumecontrol.component.css'
})
export class VolumecontrolComponent {

  product = {
    mainImg: '/products/volumecontrol/main.png',
    name: 'Volume Control Damper',
    short: 'Motorized  Smoke damper is an ideal life-safety equipment. It is typically put in an air transfer opening or an air distribution system and used at different zones to stop the fire. It is primarily made to close automatically when heat due to fire is detected, blocking airflow and preventing the spread of fire as a result.',
    images: [
      {
        img: '/products/volumecontrol/1.png',
        head: 'VCD-‘TO’O-Flange type'
      },
      {
        img: '/products/volumecontrol/2.png',
        head: 'VCD-‘TO’P-FLANGE TYPE'
      },
      {
        img: '/products/volumecontrol/3.png',
        head: `VCD-'TA'O-FLANGE-TYPE`
      },
      {
        img: '/products/volumecontrol/4.png',
        head: 'VCD-TA-P-FLANGE-TYPE'
      },
      {
        img: '/products/volumecontrol/5.png',
        head: 'VCD-‘TGO'
      },
      {
        img: '/products/volumecontrol/6.png',
        head: 'MOTORIZED VOLUME CONTROL DAMPERS-FLANGE TYPE'
      },
      {
        img: '/products/volumecontrol/7.png',
        head: 'GI RING'
      },
      {
        img: '/products/volumecontrol/8.png',
        head: 'LOW-LEAKAGE-VCD-FLANGE-TYPE'
      },
      {
        img: '/products/volumecontrol/9.png',
        head: 'VCD-TR-H'
      },
      {
        img: '/products/volumecontrol/10.png',
        head: `VCD-'TA'P-BOX-TYPE`
      },
      {
        img: '/products/volumecontrol/11.png',
        head: `VCD-TA'O'-S&C-TYPE`
      },
      {
        img: '/products/volumecontrol/12.png',
        head: `VCD-'TO'O-SC-TYPE`
      },
    ]
  }

}
