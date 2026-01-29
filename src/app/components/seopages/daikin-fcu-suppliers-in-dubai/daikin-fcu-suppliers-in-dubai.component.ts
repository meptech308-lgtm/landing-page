import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-daikin-fcu-suppliers-dubai',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daikin-fcu-suppliers-in-dubai.component.html',
  styleUrl: './daikin-fcu-suppliers-in-dubai.component.css'
})
export class DaikinFcuSuppliersDubaiComponent implements OnInit {

  cards = [
    {
      head: 'Authorized Daikin Dealer',
      para: 'We supply 100% genuine Daikin Fan Coil Units with official warranty and technical support.'
    },
    {
      head: 'Best FCU Supplier in Dubai',
      para: 'Competitive FCU pricing, ready stock availability, and fast delivery across UAE.'
    },
    {
      head: 'Energy Efficient Cooling',
      para: 'Optimized chilled water FCUs designed to reduce energy consumption and operational cost.'
    },
    {
      head: 'Expert HVAC Support',
      para: 'Professional assistance for FCU selection, installation guidance, and after-sales service.'
    }
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle(
      'Daikin Fan Coil Units (FCU) Suppliers in Dubai | Best HVAC Dealer UAE'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'MEPTECH is a Daikin authorized HVAC dealer and leading Fan Coil Units (FCU) supplier in Dubai UAE. Best FCU price and chilled water FCU solutions.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'Daikin FCU, Fan Coil Units Dubai, HVAC dealer in Dubai, Best FCU in Dubai, Daikin dealer UAE, Chilled Water FCU'
    });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Daikin Fan Coil Units (FCU) Suppliers in Dubai | HVAC Dealer UAE'
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Authorized Daikin FCU supplier in Dubai offering chilled water fan coil units for HVAC projects across UAE.'
    });

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://meptechuae.com/seo/daikin-fcu-uae.jpg'
    });

    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://meptechuae.com/daikin-fan-coil-units-dubai'
    });
  }
}
