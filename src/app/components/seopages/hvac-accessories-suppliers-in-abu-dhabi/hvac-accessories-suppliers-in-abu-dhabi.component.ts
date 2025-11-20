import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hvac-accessories-suppliers-in-abu-dhabi',
  imports: [CommonModule],
  templateUrl: './hvac-accessories-suppliers-in-abu-dhabi.component.html',
  styleUrl: './hvac-accessories-suppliers-in-abu-dhabi.component.css'
})
export class HvacAccessoriesSuppliersInAbuDhabiComponent {
   cards: any[] = [
    {
      id: 1,
      head: 'Genuine Daikin Authorization',
      para: 'As an officially certified Daikin authorized dealer in the UAE, we supply 100% genuine HVAC products that meet international standards. Our partnership with Daikin, one of the leading brands in the HVAC industry, allows us to provide energy-efficient, durable, and high-quality air conditioning systems trusted by HVAC contractors in Abu Dhabi, consultants, and M&E companies across residential and commercial projects.'
    },
    {
      id: 2,
      head: 'Strong Stock and Fast Delivery Across the UAE',
      para: 'As one of the leading HVAC suppliers in Abu Dhabi, we maintain a large inventory of Daikin air conditioners, VRF systems, fan coil units, chillers, heat pumps, compressors, and refrigeration spare parts. Our pre-stocked warehouse supports fast delivery across Dubai, Sharjah, and the United Arab Emirates, minimizing project delays. Whether you need ductwork materials, flexible ducts, copper pipes, or closed cell elastomeric insulation, we provide high-quality HVAC tools and accessories to keep your projects running efficiently.'
    },
    {
      id: 3,
      head: 'Complete After-Sales Service',
      para: 'We believe our job doesn’t end with supply. Our after-sales service includes installation guidance, HVAC maintenance and repair, and spare parts trading support for all Daikin air conditioning systems. Our trained HVAC technicians and service engineers offer professional assistance to maintain optimal refrigerant flow, ensuring long-lasting heating and cooling performance.'
    },
    {
      id: 4,
      head: 'Technical Expertise You Can Trust',
      para: 'With years of experience in the HVAC market, our technical team understands Daikin’s full product line, from split units to ducted air conditioning systems and variable refrigerant flow (VRF) units. As a trusted HVAC company in the UAE, we help contractors and consultants choose the right HVAC equipment that meets project specifications and complies with ISO-certified air conditioning standards.'
    },
    {
      id: 5,
      head: 'Focused on Contractor Partnerships',
      para: 'We value long-term relationships with HVAC contractors in Abu Dhabi and across the UAE. As a professional HVAC supplier, we provide customized HVAC solutions, quick communication, and dedicated project support. Our team collaborates with MEP contractors, HVAC consultants, and HVAC manufacturing companies in Abu Dhabi to supply reliable heating, ventilation, and air conditioning equipment for diverse industries.'
    },
    {
      id: 6,
      head: 'Commitment to Quality and International Standards',
      para: 'As one of the top HVAC companies in the UAE, our operations follow strict international standards of performance, safety, and quality control. Every Daikin product we offer — from air ducts and duct accessories to compressors, refrigerants, and refrigeration components — is tested for durability and compliance. Our focus on sustainability, innovation, and high-quality products makes us a market leader in commercial hvac suppliers and residential air conditioning supply.'
    },
    {
      id: 7,
      head: 'Transparent Pricing and Reliable Support',
      para: 'As a reliable trading company, we maintain clear pricing policies and honest communication. Our quotations include detailed product descriptions, warranty terms, and competitive prices for HVAC spare parts and accessories. Contractors appreciate our professional HVAC services, timely delivery, and customer-first approach, which make us one of the most trusted HVAC companies in UAE.'
    },
    {
      id: 8,
      head: 'UAE-Wide Reach and Easy Accessibility',
      para: 'Headquartered in Abu Dhabi, our HVAC company proudly serves Dubai, Sharjah, Ajman, and Ras Al Khaimah. Our strong logistics network supports quick supply of HVAC systems, air conditioning equipment, and ventilation solutions throughout the country. Whether it’s a commercial HVAC project or a residential installation, we guarantee reliable delivery, support, and on-site assistance.'
    },
  ]


    constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {

    this.titleService.setTitle('HVAC suppliers in Abu Dhabi, UAE | Best HVAC companies | HVAC equipment');

    this.metaService.updateTag({
      name: 'description',
      content: "We are daikin authorized hvac suppliers in abu dhabi uae. including dubai we are supplying hvac equipment and air conditioning spare parts in uae. for more call us!"
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'MEPTECH, DAIKIN AUTHORIZED DEALER, DAIKIN DEALER IN UAE, AIR CONDITION TRADING, AC UNITS, AC DEALER, AIR CONDITION, HVAC, VRV, VRF, VRV INSTALLATION, VRV SERVICE, FCU, FAN COIL UNITS, FLOWBAR, HIDDEN FRAME DIFFUSER, VAV, PRESSURE INDEPENDENT VAV, BY PASS VAV, LOUVERS, SAND TRAP LOUVERS, CROSS TALK ATTENUATORS'
    });

    this.metaService.updateTag({ property: 'og:title', content: 'HVAC suppliers in Abu Dhabi, UAE | Best HVAC companies | HVAC equipment' });
    this.metaService.updateTag({ property: 'og:description', content: "We are daikin authorized hvac suppliers in abu dhabi uae. including dubai we are supplying hvac equipment and air conditioning spare parts in uae. for more call us!" });
    this.metaService.updateTag({ property: 'og:image', content: 'https://meptechuae.com/seo/featuredABUDHABI.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://meptechuae.com/hvac-accessories-suppliers-in-abu-dhabi' });

    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'HVAC suppliers in Abu Dhabi, UAE | Best HVAC companies | HVAC equipment' });
    this.metaService.updateTag({ name: 'twitter:description', content: "We are daikin authorized hvac suppliers in abu dhabi uae. including dubai we are supplying hvac equipment and air conditioning spare parts in uae. for more call us!" });
    this.metaService.updateTag({ name: 'twitter:image', content: 'https://meptechuae.com/seo/featuredABUDHABI.jpg' });
    this.metaService.updateTag({ name: 'twitter:url', content: 'https://meptechuae.com/hvac-accessories-suppliers-in-abu-dhabi' });

  }
}
