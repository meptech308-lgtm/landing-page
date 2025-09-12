import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  bannerData: any = {
    '/': {
      img: '/banner1.png',
      title: 'HVAC Product Solutions Partner',
      subtitle: 'Trusted by MEP consultants and contractors across the UAE for reliable HVAC solutions'
    },
    '/services': {
      img: '/banner3.png',
      title: 'Reliable HVAC Services & Maintenance',
      subtitle: 'Ensure year-round comfort with our expert maintenance, repair, and system upgrade services—backed by certified professionals and Daikin quality.'
    },
    '/projects': {
      img: '/banner3.png',
      title: 'Our HVAC Project Expertise',
      subtitle: 'Explore our successful HVAC system installations across commercial, residential, and industrial sectors, powered by Daikin’s trusted technology.'
    },
    '/contact': {
      img: '/banner3.png',
      title: 'Let’s Talk HVAC Solutions',
      subtitle: 'Need assistance or have a project in mind? Reach out to our HVAC experts for tailored advice, support'
    },
    '/products': {
      img: '/banner2.png',
      title: 'HVAC Solutions Hub',
      subtitle: 'Discover the complete Daikin range  Systems, Controls, and Accessories with warranty and expert support.'
    },
    'default': {
      img: '/banner1.png',
      title: 'HVAC Product Solutions Partner',
      subtitle: 'Trusted by MEP consultants and contractors across the UAE for reliable HVAC solutions'
    }
  };

  constructor(private router: Router) { }

  get currentBanner() {
    const currentUrl = this.router.url.split('?')[0];
    const matchingKey = Object.keys(this.bannerData)
      .filter(key => key !== 'default')
      .sort((a, b) => b.length - a.length)
      .find(key => currentUrl.startsWith(key));

    return matchingKey ? this.bannerData[matchingKey] : this.bannerData['default'];
  }
}
