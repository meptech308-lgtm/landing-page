import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from "../shared/carousel/carousel.component";
import { RandomlistComponent } from "../randomlist/randomlist.component";
import { ProductCardWithImageComponent } from "../shared/product-card-with-image/product-card-with-image.component";

@Component({
  selector: 'app-erv',
  imports: [CommonModule, CarouselComponent, RandomlistComponent, ProductCardWithImageComponent],
  templateUrl: './erv.component.html',
  styleUrl: './erv.component.css'
})
export class ErvComponent {

  product = {
    mainImgs: [
      '/products/erv/main1.png',
      '/products/erv/main2.png',
      '/products/erv/main3.png',
    ],
    name: 'Energy Recovery Ventilator',
    short: 'Daikin ERV is equipped with EC Fan to ensure lower power consumption and Sorption, molecular sieve Å Energy Recovery Wheel to recover both sensible and latent heat ensuring higher heat exchange with lower energy consumption due to lower pressure drop.',
    about: `Daikin Energy Recovery Ventilator (ERV) Unit is a complete system, where the ventilation rate is controlled via supply and extract fans. An 
air-to-air heat exchanger transfers heat from the extracted air into the incoming supply fresh air and precool the fresh outside air, this helps 
to prevent energy losses from over ventilation while improving indoor air quality`,
    cards: [
      {
        img: '',
        head: 'Frame & Panel',
        points: [
          'Profile made of extruded aluminum alloy',
          'Internally rounded Profiles (10mm), ensuring frame is flush with the internal housing surfaces and completely smooth to avoid dirt accumulation',
          'Double chambered profiles ensuring screws are totally concealed and there are no projections inside the unit ',
          'Structure is completed with three way connecting corners made of glass reinforced nylon',
          '42mm Double skin panel with PIR insulation (Polyisocyanurate insulation), overall density of 40-42 kg/m³ and thermal conductivity of 0.02 W/m °K.',
          'External Skin 0.7 mm thick Precoated Steel and 0.5 mm thick G90 galvanized steel inner skin'
        ]
      },
      {
        img: '/products/erv/1.png',
        head: 'Prefilter',
        points: [
          'Efficiency Class G4(EN779) / MERV 8',
          'Multipleat filters made from polyester synthetic media with PVC coated galvanized wire mesh',
          'High Dust holding capacity with longer service life',
          'Mettalic Frame made of  Galvanized steel'
        ]
      },
      {
        img: '/products/erv/2.png',
        head: 'Bag Filter',
        points: [
          'Efficiency Class F7 (EN779) / MERV 13',
          'High-Loft, layered, melt blown synthetic media with non-shedding, water resistant',
          'Ultrasonically welded media ensuring optimum media utilization and eliminates leakage',
          'Metallic Frame made of Galvanized steel'
        ]
      },
      {
        img: '/products/erv/3.png',
        head: 'Heat Recovery Wheel',
        points: [
          'Sorption, molecular sieve 3Å, Rotor to recover sensible heat and latent heat ',
          'Storage matrix made of aluminum foil set up of alternating layers of flat and corrugated foils',
          'Foil layers stabilized together by means of interior radial spokes, fixed at hub and rim for long term stability',
          'Geared motor for constant velocity at maximum rotational speed'
        ]
      },
      {
        img: '/products/erv/4.png',
        head: 'High Efficiency EC Fan',
        points: [
          'High efficiency backward curved impeller.',
          'External rotor motor with integrated control electronics. IE4 efficiency motors with Permanently lubricated ball bearings'
        ]
      },
      {
        img: '/products/erv/5.png',
        head: 'Control Box',
        points: [
          'IP 66 enclosure',
          'Supply and Return fan regulator',
          'Manual and Auto switch'
        ]
      },
    ]
  }

}
