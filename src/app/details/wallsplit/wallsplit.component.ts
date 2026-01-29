import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from "../shared/product-card/product-card.component";
import { RandomlistComponent } from "../randomlist/randomlist.component";
import { CarouselComponent } from "../shared/carousel/carousel.component";

@Component({
  selector: 'app-wallsplit',
  imports: [CommonModule, RandomlistComponent, CarouselComponent],
  templateUrl: './wallsplit.component.html',
  styleUrl: './wallsplit.component.css'
})
export class WallsplitComponent {

  product = {
  mainImg: '/products/wallsplit/main.png',
  mainImgs: [
    '/products/wallsplit/main1.png',
    '/products/wallsplit/main2.jpg',
    '/products/wallsplit/main3.jpg',
  ],
  name: 'Daikin FTKF Wall-Mounted Split Air Conditioners',
  tagline: 'Energy-Efficient Inverter AC for Residential & Light Commercial Use',
  short: 'The Daikin FTKF series wall-mounted split air conditioners are designed to deliver reliable cooling performance, high energy efficiency, and long-term durability in UAE climatic conditions.',

  features: [
    {
      title: 'Inverter Technology for Energy Savings',
      desc: 'Precisely controls compressor speed to maintain stable temperatures while reducing electricity consumption and operating costs.'
    },
    {
      title: 'R-32 Eco-Friendly Refrigerant',
      desc: 'Lower Global Warming Potential (GWP) with improved heat transfer efficiency.'
    },
    {
      title: 'Powerful & Uniform Cooling',
      desc: 'Optimized airflow ensures fast and even cooling even during peak summer.'
    },
    {
      title: 'Low Noise Operation',
      desc: 'Quiet performance ideal for bedrooms, living areas, and offices.'
    },
    {
      title: 'Built for Harsh Climate Conditions',
      desc: 'Anti-corrosion outdoor units suitable for high-temperature and coastal environments.'
    },
    {
      title: 'User-Friendly Operation',
      desc: 'Auto-restart, self-diagnosis, sleep mode, and energy-saving functions.'
    }
  ],

  capacities: ['1.0 Ton', '1.5 Ton', '2.0 Ton', '2.5 Ton'],

  applications: [
    'Residential apartments and villas',
    'Bedrooms, living rooms, and home offices',
    'Small offices, clinics, and retail spaces'
  ]
};


}
