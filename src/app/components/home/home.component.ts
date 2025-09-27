import { Component } from '@angular/core';
import { BannerComponent } from "../../shared/banner/banner.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
      img: '/image2.png',
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

  constructor(
    private router: Router
  ) { }

  goToProducts(head: string) {
    const mapping: any = {
      'AC EQUIPMENTS': 'AC Equipments',
      'AIR DISTRIBUTION PRODUCTS': 'Air Distribution',
      'VENTILATIONS': 'Ventilation',
      'CONTROL UNITS': 'Controls'
    };

    this.router.navigate(['/products'], { state: { category: mapping[head] || head } });
  }

}
