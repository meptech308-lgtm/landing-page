import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hvac-accessories-suppliers-in-dubai',
  imports: [CommonModule],
  templateUrl: './hvac-accessories-suppliers-in-dubai.component.html',
  styleUrl: './hvac-accessories-suppliers-in-dubai.component.css'
})
export class HvacAccessoriesSuppliersInDubaiComponent {
  cards: any[] = [
    {
      id: 1,
      head: 'Authorized Daikin Dealer',
      para: 'Meptech is a certified and fully authorized Daikin supplier in the UAE. We provide genuine HVAC equipment, AC parts, air conditioning and refrigeration components, and HVAC accessories, all backed by official documentation and full manufacturer warranty. Contractors and businesses can confidently source industrial air conditioning systems and spare parts from us.'
    },
    {
      id: 2,
      head: 'Comprehensive Product Range',
      para: 'Our stock includes everything needed for industrial HVAC projects: VRV/VRF systems, chillers, compressors, fan coil units, copper coils, HVAC tools, AC equipment, HVAC duct accessories, air diffusion, and air distribution products. From HVAC AC spare parts in Dubai to complete air conditioning systems, we cover all types of air conditioners and accessories, making us a one-stop solution for contractors.'
    },
    {
      id: 3,
      head: 'Competitive Pricing & Bulk Orders',
      para: 'We offer transparent pricing for all HVAC products, including HVAC replacement parts, air conditioner contactors, AC refrigerant gas, and fan motors. With flexible payment options, bulk discounts, and the best prices in Dubai and across the UAE, businesses can manage large-scale projects efficiently.'
    },
    {
      id: 4,
      head: 'Expert Technical Support',
      para: 'Our team provides professional guidance for HVAC installation, maintenance, and system optimization. Contractors and technicians benefit from our expertise in troubleshooting, system design, and ensuring high-performance operation, minimizing project downtime.'
    },
    {
      id: 5,
      head: 'Fast Delivery & Reliable Logistics',
      para: 'Meptech supplies HVAC equipment, AC parts, and HVAC accessories across all UAE emirates, including Dubai, Abu Dhabi, Sharjah, and Ras Al Khaimah. With ready stock of HVAC products and careful logistics, we guarantee timely delivery for industrial projects.'
    },
    {
      id: 6,
      head: 'Trusted B2B Reputation',
      para: 'As a leading HVAC supplier in the UAE, we have built a strong reputation among contractors, HVAC companies, and service providers. Our reliable supply of original parts from trusted manufacturers, with brand warranty, ensures repeat partnerships and project confidence.'
    },
    {
      id: 7,
      head: 'Compliance & Warranty Assurance',
      para: 'All products comply with UAE industrial standards. Contractors can rely on genuine HVAC spare parts, fan motors, and refrigerant gas, all supplied by original manufacturers with full brand warranty for long-term peace of mind.'
    },
    {
      id: 8,
      head: 'Nationwide UAE Coverage',
      para: 'We serve all regions across the UAE, ensuring contractors have access to HVAC suppliers, accessories parts dealers, and accessories wherever their projects are located. Our network supports fast supply, on-site assistance, and readily available stock for all types of air conditioners and HVAC systems.'
    },
  ]


    constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('HVAC accessories suppliers in Dubai, UAE | AC spare parts supplier');

    this.metaService.updateTag({
      name: 'description',
      content: "Why not meptech's HVAC accessories suppliers in dubai? we are not just ac spare parts in dubai uae. we are best choice for air conditioner, compressor and refrigerant gas supplier."
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'HVAC accessories suppliers Dubai, Daikin dealer Dubai, AC spare parts suppliers Dubai'
    });

    this.metaService.updateTag({ property: 'og:title', content: 'HVAC accessories suppliers in Dubai, UAE | AC spare parts supplier' });
    this.metaService.updateTag({ property: 'og:description', content: "Why not meptech's HVAC accessories suppliers in dubai? we are not just ac spare parts in dubai uae. we are best choice for air conditioner, compressor and refrigerant gas supplier." });
    this.metaService.updateTag({ property: 'og:image', content: 'https://meptechuae.com/seo/HVAC accessories suppliers in Dubai.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://meptechuae.com/hvac-accessories-suppliers-in-dubai' });
  }
}
