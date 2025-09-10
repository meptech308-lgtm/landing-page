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

}
