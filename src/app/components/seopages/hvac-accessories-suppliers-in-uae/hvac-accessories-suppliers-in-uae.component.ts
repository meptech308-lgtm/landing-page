import { Component} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hvac-accessories-suppliers',
  imports: [CommonModule],
  templateUrl: './hvac-accessories-suppliers-in-uae.component.html',
  styleUrl: './hvac-accessories-suppliers-in-uae.component.css'
})
export class HvacAccessoriesSuppliersInUaeComponent {

  cards: any[] = [
    {
      id: 1,
      head: 'Complete HVAC Product Range',
      para: 'We supply a wide range of Daikin HVAC products, including non return dampers, motorized smoke fire dampers, linear slot diffusers, ducts, copper coils, compressors, motors, linear grills and all HVAC parts and accessories. Technicians can complete every installation efficiently with our products.'
    },
    {
      id: 2,
      head: 'Authorized Daikin Dealer',
      para: 'As certified Daikin dealers in UAE, we provide genuine air conditioning equipment, air conditioning units, and quality AC accessories  parts. Clients and businesses trust us for high performance, safety, and durability in residential and commercial projects.'
    },
    {
      id: 3,
      head: 'Competitive Pricing & Flexible Terms',
      para: 'We offer fair pricing, bulk discounts, and flexible payment options for UAE HVAC companies. Our deals on <a href="https://meptechuae.com/hvac-accessories-suppliers-in-dubai" class="internal-link">air conditioning accessories spare parts in Dubai</a>, and HVAC accessories make purchasing cost-effective without compromising quality.'
    },
    {
      id: 4,
      head: 'Reliable Delivery & Logistics',
      para: 'Our delivery network covers all of Dubai and UAE. From urgent HVAC accessories in Dubai to scheduled shipments of air handling units and refrigeration accessories parts, we ensure fast, safe, and timely deliveries.'
    },
    {
      id: 5,
      head: 'Expert Technical Support & After-Sales Service',
      para: 'Our team offers installation guidance, technical advice, and responsive after-sales support. We provide warranty services for HVAC equipment, air conditioning accessories, and replacement options to keep your projects running smoothly.'
    },
    {
      id: 6,
      head: 'Trusted Reputation in UAE',
      para: 'We are a leading supplier and dealer of air conditioning and refrigeration products in Dubai and across UAE. Technicians, HVAC suppliers in UAE, and parts dealers rely on us for premium quality HVAC, and accessories.'
    },
    {
      id: 7,
      head: 'Legal Compliance',
      para: 'All our products meet UAE safety, environmental, and refrigerant regulations. Partnering with a licensed HVAC accessories suppliers in UAE guarantees compliance and safety for every air conditioning system installation.'
    },
    {
      id: 8,
      head: 'Long-Term Partnerships',
      para: 'We focus on long-term relationships with HVAC companies, priority support, and exclusive deals. From HVAC units to AC accessories trading, we keep professionals updated with the latest Daikin products and HVAC accessories and HVAC replacement parts.'
    },
  ]
faqs: any[] = [
  { 
    id:1,
    qns: 'Is HVAC in demand in Dubai?',
    ans: 'Yes, the HVAC industry is in high demand across Dubai and the UAE. The region’s growing construction projects, extreme climate, and focus on energy-efficient systems make HVAC a fast-growing market. Whether you plan to start a business or offer consultancy services, this sector offers strong potential and long-term opportunities.',
    open: false
  },
  { 
    id:2,
    qns: 'What are the pros and cons of buying Daikin HVAC from local suppliers in UAE?',
    ans: 'Buying Daikin HVAC parts from local suppliers in the UAE comes with many benefits. Local dealers deliver parts quickly, helping you reduce repair delays and keep your systems running smoothly. They also understand the UAE’s hot climate and have practical experience with different types of HVAC systems, making it easier to find the right accessories and parts for your setup. Most authorized HVAC parts dealers in UAE keep genuine Daikin parts in stock — including AC fan motors, duct accessories, and cassette solutions — ensuring reliable performance and warranty support. Plus, when you buy locally, you save time and money by avoiding shipping delays, customs issues, and extra import costs.',
    open: false
  },
  { 
    id:3,
    qns: 'Which HVAC tools and accessories suppliers in Dubai are good for small businesses?',
    ans: 'For small HVAC businesses in Dubai, having a dependable supplier makes all the difference. Meptech UAE is a trusted partner for many contractors and service providers. We supply a full range of HVAC tools, accessories, and genuine Daikin accessories — all at competitive prices to support your daily operations and service quality.',
    open: false
  },
  { 
    id:4,
    qns: 'I’m trying to repair my AC, but the ventilation, copper coils, motor and compressor is failing—where can I get a replacement part in Dubai UAE? ',
    ans: 'If your AC compressor starts failing, avoid trying to repair it yourself. It’s a sensitive and complicated part, and even a small mistake can cause more damage. Since AC units use high electrical power, there’s also a real risk of electric shock if handled carelessly. These systems are heavier and more powerful than regular split ACs, so it’s always wiser to contact a professional technician. They can safely inspect the issue and replace the part using genuine components.',
    open: false
  },
  { 
    id:5,
    qns: 'How do I identify the best air conditioning parts suppliers in UAE that offer warranties on their products?',
    ans: 'When choosing the best air conditioning parts suppliers in the UAE, focus on experience, reliability, and product quality—not just price. Look for authorized suppliers and parts dealers connected with trusted equipment manufacturers such as Daikin, as this ensures genuine and high-performing products. A dependable supplier provides a clear warranty policy with well-defined coverage and replacement terms. It’s also wise to consider the supplier’s technical expertise and background in the HVAC industry. Experienced dealers understand HVAC accessories, spare parts compatibility, and the needs of technicians and contractors. Reliable suppliers maintain transparency, share proper documentation, and communicate clearly during purchases or warranty support. Lastly, reviewing feedback from HVAC professionals and contractors in the UAE can help identify dealers known for dependable service and long-term support.',
    open: false
  },
]

    constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {

    this.titleService.setTitle('HVAC accessories suppliers in UAE | Daikin dealer Dubai  | AC spare part suppliers');

    this.metaService.updateTag({
      name: 'description',
      content: 'We are best hvac accessories suppliers in uae. our ac, air conditioner spare part and services available all over uae like dubai etc. for air condition parts suppliers, call us!'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'MEPTECH, DAIKIN AUTHORIZED DEALER, DAIKIN DEALER IN UAE, AIR CONDITION TRADING, AC UNITS, AC DEALER, AIR CONDITION, HVAC, VRV, VRF, VRV INSTALLATION, VRV SERVICE, FCU, FAN COIL UNITS, FLOWBAR, HIDDEN FRAME DIFFUSER, VAV, PRESSURE INDEPENDENT VAV, BY PASS VAV, LOUVERS, SAND TRAP LOUVERS, CROSS TALK ATTENUATORS'
    });

    this.metaService.updateTag({ property: 'og:title', content: 'HVAC accessories suppliers in UAE | Daikin dealer Dubai  | AC spare part suppliers' });
    this.metaService.updateTag({ property: 'og:description', content: 'We are best hvac accessories suppliers in uae. our ac, air conditioner spare part and services available all over uae like dubai etc. for air condition parts suppliers, call us!' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://meptechuae.com/seo/featuredUAE.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://meptechuae.com/hvac-accessories-suppliers-in-uae' });

    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'HVAC accessories suppliers in UAE | Daikin dealer Dubai | AC spare part suppliers' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'We are best hvac accessories suppliers in uae. our ac, air conditioner spare part and services available all over uae like dubai etc. for air condition parts suppliers, call us!' });
    this.metaService.updateTag({ name: 'twitter:image', content: 'https://meptechuae.com/seo/featuredUAE.jpg' });
    this.metaService.updateTag({ name: 'twitter:url', content: 'https://meptechuae.com/hvac-accessories-suppliers-in-uae' });
  }
  toggleFAQ(index: number): void {
    this.faqs.forEach((faq, i) => {
      faq.open = i === index ? !faq.open : false;
    });
  }
}

