import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vrvapt',
  imports: [CommonModule],
  templateUrl: './vrvapt.component.html',
  styleUrl: './vrvapt.component.css'
})
export class VrvaptComponent {

  product = {
    mainImg: '/products/vrvapt/main.png',
    name: 'VRV APT',
    short: 'VRV Apt is the ideal air conditioning system as it replaces multiple outdoor units with only one unit maintaining the picturesque view of the building. VRV Apt is ideally suited for residences as it offers a range of indoor units, which can be connected with a centralized outdoor unit.',
    about: 'The versatile operation range of the VRV Apt system works to reduce limitations on installation locations. The operation temperature range for heating goes all the way down to -20C, while cooling can be performed with outdoor temperatures as high as 54C. Both these achievements are due to the adoption of a high-pressure dome-type compressor which is specially designed for operation in extreme ambient conditions.',
    subImages: [
      {
        img: '/products/vrvapt/1.png',
        head: 'NEW LIFE STYLE',
        para: 'Redefining Home Air Conditioning: A complete solution that provides Cooling/Heating, Comfort,Control and Convenience in one single system'
      },
      {
        img: '/products/vrvapt/2.png',
        head: 'CONTEMPORARY',
        para: 'Creative and modern design to fit your personal heaven.'
      },
      {
        img: '/products/vrvapt/3.png',
        head: 'CONCEALED',
        para: 'Hidden elegance to complement your beautifully designed home interiors.'
      },
      {
        img: '/products/vrvapt/4.png',
        head: 'CARING',
        para: 'Creates a pleasant environment for you and your loved ones'
      },
    ],
    bigCards: [
      {
        head: 'IMPROVED RELIABILITY AT HIGH AMBIENT TEMPERATURES',
        para: `Refrigerant cooling technology ensures the stability of PCB temperature & improves reliability at high ambient temperatures. It is possible to cool the inverter power module stability even at high ambient temperature. This helps to keep air-conditioning capacity and also ensures efficient and reliable operation. In addition to stable cooling, Refrigerant Cooling Circuit prevents PCB board from dust, water, and small animal entering, making this design solution ideal for hot desert climate compared to traditional air-cooled PCB Boards.
Additional Coating is applied to PCB for strengthening to cope with high ambient environment & to ensure longer life of PCB.Wide Area Heat Exchanger is designed to ensure delivery of required capacity at high ambient conditions. Heat Exchanger Fins are covered with Blue Film which consists of corrosion resistance layer covered with hydrophilic surface treatment coating to withstand harsh environment conditions.`
      },
      {
        head: 'WIDE OPERATION TEMPERATURE RANGE',
        para: `The versatile operation range of the VRV Apt system works to reduce limitations on installation locations. The operation temperature range for heating goes all the way down to -20C, while cooling can be performed with outdoor temperatures as high as 54C. Both these achievements are due to the adoption of a high-pressure dome-type compressor which is specially designed for operation in extreme ambient conditions`
      }
    ]
  }

}
