import { Component } from '@angular/core';
import { BannerComponent } from "../../shared/banner/banner.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [BannerComponent, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  cards: any[] = [
    {
      id: 1,
      img: '/card0.png',
      head: 'System Design $ Consultation',
      para: 'Professional HVAC system design and engineering consultation for optimal performance',
      features: [
        'Load calculations and system sizing',
        'Energy efficiency optimization',
        'Compliance with UAE building codes'
      ]
    },
    {
      id: 2,
      img: '/card0.png',
      head: 'Installation and Commissioning',
      para: 'Expert installation and commissioning services by certified technicians',
      features: [
        'Professional installation team',
        'Quality control procedures',
        'System testing and balancing'
      ]
    },
    {
      id: 3,
      img: '/card0.png',
      head: 'Maintenance & Support',
      para: 'Comprehensive maintenance programs to ensure optimal system performance',
      features: [
        'Preventive maintenance programs',
        'Emergency repair services',
        'Spare parts availability'
      ]
    },
  ]

  industry: any[] = [
    {
      id: 1,
      head: 'Health Care',
      para: 'Hospitals, clinics, and medical centers with critical air quality requirements'
    },
    {
      id: 2,
      head: 'Commercial Building',
      para: 'Office complexes, retail centers, and mixed-use developments'
    },
    {
      id: 3,
      head: 'Hospitalilty',
      para: 'Hotels, restaurants, and entertainment venues'
    },
    {
      id: 4,
      head: 'Industrial',
      para: 'Manufacturing plants, warehouses, and industrial complexes'
    },
    {
      id: 5,
      head: 'Educational',
      para: 'Schools, universities, and training centers'
    },
    {
      id: 6,
      head: 'Residential',
      para: 'Villas, apartments, and residential communities'
    },
  ]

  ass: any[] = [
    {
      id: 1,
      img: '/ass1.png',
      head: 'ISO 9001',
      para: 'Quality Management'
    },
    {
      id: 2,
      img: '/ass2.png',
      head: 'Daikin Certified',
      para: 'QAuthourized Dealer'
    },
    {
      id: 3,
      img: '/ass3.png',
      head: 'UAE Standards',
      para: 'Local Compilance'
    },
    {
      id: 4,
      img: '/ass4.png',
      head: 'ASHRAE',
      para: 'International Standards'
    },
  ]

}
