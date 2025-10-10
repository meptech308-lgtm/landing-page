import { Component } from '@angular/core';
import { BannerComponent } from "../../shared/banner/banner.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Products } from '../../data/products';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cards: any[] = [
    {
      id: 1,
      img: '/card0.png',
      head: 'Authourised Daikin Dealer',
      para: 'Official partner for complete Daikin Air conditioning products offering full scope technical, selection, warranty and after sales support.'
    },
    {
      id: 2,
      img: '/card1.png',
      head: '15+ Years Experience',
      para: 'With over 15 years of proven expertise in delivering HVAC system solutions, we proudly partner with the world’s leading HVAC brands'
    },
    {
      id: 3,
      img: '/card2.png',
      head: 'Innovative and Efficent solutions',
      para: 'Advanced systems that reduce energy consumption by up to 40%'
    },
    {
      id: 4,
      img: '/card3.png',
      head: 'Young, Dynamic Team',
      para: 'Team of qualified engineers, HVAC system specialists, and operations experts.'
    },
  ]

  featured: any[] = [
    {
      id: 1,
      img: '/image1.png',
      head: 'AC EQUIPMENTS'
    },
    {
      id: 2,
      img: '/images.jpeg',
      head: 'AIR DISTRIBUTION PRODUCTS'
    },
    {
      id: 1,
      img: '/image3.png',
      head: 'VENTILATIONS'
    },
    {
      id: 1,
      img: '/image4.png',
      head: 'CONTROL UNITS'
    },
  ]

  products = Products

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.updateMetaTags();
  }

  goToProducts(head: string) {
    const mapping: any = {
      'AC EQUIPMENTS': 'AC Equipments',
      'AIR DISTRIBUTION PRODUCTS': 'Air Distribution',
      'VENTILATIONS': 'Ventilation',
      'CONTROL UNITS': 'Controls'
    };

    this.router.navigate(['/products'], { state: { category: mapping[head] || head } });
  }

  private updateMetaTags() {
    this.titleService.setTitle('MEPTECH HVAC Solutions | Daikin Authorized Dealer in UAE');

    this.metaService.updateTag({
      name: 'description',
      content: 'MEPTECH Air-condition Trading LLC delivers innovative HVAC solutions in UAE including Daikin AC systems, VRV, Fan Coil Units (FCU), air distribution products, VAVs, Flowbars, and Louvers. Trusted partner for all HVAC projects.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'MEPTECH, DAIKIN AUTHORIZED DEALER, DAIKIN DEALER IN UAE, AIR CONDITION TRADING, AC UNITS, AC DEALER, AIR CONDITION, HVAC, VRV, VRF, VRV INSTALLATION, VRV SERVICE, FCU, FAN COIL UNITS, FLOWBAR, HIDDEN FRAME DIFFUSER, VAV, PRESSURE INDEPENDENT VAV, BY PASS VAV, LOUVERS, SAND TRAP LOUVERS, CROSS TALK ATTENUATORS'
    });

    this.metaService.updateTag({ property: 'og:title', content: 'MEPTECH HVAC Solutions | Daikin Authorized Dealer in UAE' });
    this.metaService.updateTag({ property: 'og:description', content: 'Innovative HVAC solutions including VRV, FCU, and Air Distribution Products. Trusted Daikin dealer in UAE.' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://meptechuae.com/logo1.png' });

    this.metaService.updateTag({ property: 'twitter:title', content: 'MEPTECH HVAC Solutions | Daikin Authorized Dealer in UAE' });
    this.metaService.updateTag({ property: 'twitter:description', content: 'End-to-end HVAC solutions including VRV, FCU, and airside products. Reliable Daikin dealer UAE.' });
    this.metaService.updateTag({ property: 'twitter:image', content: 'https://meptechuae.com/logo1.png' });
  }

}
