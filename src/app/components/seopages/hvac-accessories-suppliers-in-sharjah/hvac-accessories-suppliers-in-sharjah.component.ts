import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-hvac-accessories-suppliers-in-sharjah',
  imports: [CommonModule],
  templateUrl: './hvac-accessories-suppliers-in-sharjah.component.html',
  styleUrl: './hvac-accessories-suppliers-in-sharjah.component.css'
})
export class HvacAccessoriesSuppliersInSharjahComponent {
  cards: any[] = [
    {
      id: 1,
      head: 'Genuine Daikin-Authorized HVAC Products',
      para: 'We supply genuine Daikin HVAC units in Sharjah, trusted by HVAC companies and contractors across the UAE. Our Daikin heating and cooling systems—VRF, split AC, and ducted air-conditioning units—offer stable temperature control, high efficiency, and long-term reliability. As one of the leading HVAC suppliers in Sharjah, we support residential, commercial, and industrial projects with complete HVAC solutions from a top global brand.'
    },
    {
      id: 2,
      head: 'Strong Inventory Across All Daikin Categories',
      para: 'Our Sharjah warehouse keeps a complete range of Daikin commercial HVAC systems, VRV IV+, VRV X, AHUs, FCUs, compressors, ecology units, and HVAC accessories. We also stock ductwork materials from HVAC duct manufacturers in Sharjah, including GI, galvanized, and Betec CAD products. With strong inventory and ac wholesale supply, contractors can finish installations without delays.'
    },
    {
      id: 3,
      head: 'Fast Delivery Across Sharjah & the UAE',
      para: 'We provide fast delivery to all areas of Sharjah—industrial zones, commercial hubs, and residential neighborhoods. We also supply HVAC companies in Dubai, Abu Dhabi, Ajman, and across the Middle East. Our efficient logistics help contractors complete air conditioning, chiller, ventilation, and outdoor setup tasks on schedule.'
    },
    {
      id: 4,
      head: 'Competitive Pricing for Contractors',
      para: 'As a Daikin dealer in Sharjah, we offer competitive prices for VRF systems, ducted units, Daikin industrial air conditioners, and HVAC equipment. Contractors benefit from transparent quotes, cost-effective trading options, and access to one of the largest HVAC manufacturers through an authorized dealer in the UAE.'
    },
    {
      id: 5,
      head: ' Expert Technical Support for Product Selection',
      para: 'Our trained team helps contractors choose the right Daikin HVAC system — VRF, split AC, portable outdoor units, AHUs, pumps, or customized configurations. We guide you on tonnage, refrigerant type, airflow, and model selection to match your project’s climate and infrastructure needs. This improves installation efficiency and ensures reliable HVAC performance.'
    },
    {
      id: 6,
      head: 'Warranty Support and Reliable After-Sales Service',
      para: 'We provide dependable after-sales support, fast warranty assistance, and quick replacement coordination. Contractors receive immediate help for any HVAC equipment issues. As one of the reliable HVAC suppliers in Sharjah, we support all Daikin hvac units, complete HVAC systems, air-conditioning setups, and ventilation equipment.'
    },
    {
      id: 7,
      head: 'Fast Quotations & Priority Contractor Support',
      para: 'We offer quick quotations for Daikin VRF systems, indoor units, HVAC parts supply, duct accessories, AHUs, chillers, and more. Contractors get priority support, helping them manage tight deadlines and complex site requirements. Our strong supply chain supports both commercial and residential air conditioning unit installations.'
    },
    {
      id: 8,
      head: 'Latest Daikin Models & Market Updates',
      para: 'We supply the newest Daikin heating and cooling technologies, VRV X series, advanced AHUs, cutting-edge air-conditioning systems, and energy-efficient HVAC units used by leading HVAC companies in Sharjah. Contractors also receive insights from global HVAC equipment manufacturers, allowing them to stay updated with the latest climate-control solutions and industry trends in the Middle East.'
    },
  ]
faqs: any[] = [
  { 
    id:1,
    qns: 'What is our HVAC systems prices in Sharjah?',
    ans: 'Pricing depends on your location and specific requirements. For accurate details, simply contact our team—we’re ready to assist you with the right information.',
    open: false
  },
  { 
    id:2,
    qns: 'Why Daikin brand is best in ac system?',
    ans: 'Daikin is a trusted brand, and unlike many others, it offers a great balance of budget-friendly pricing and strong performance. It’s one of the best options for anyone looking for reliable and efficient cooling.',
    open: false
  },
  { 
    id:3,
    qns: 'As Daikin dealers in the UAE, which cities do we supply? ',
    ans: 'We don’t limit our service to Sharjah—our HVAC accessories are available for supply across the entire UAE.',
    open: false
  },
  { 
    id:4,
    qns: 'Are you providing any offers in your HVAC company? ',
    ans: 'Yes, we provide brand offers with every purchase.',
    open: false
  },
  { 
    id:5,
    qns: 'Which industries need HVAC accessories?',
    ans: 'There is no limit to where HVAC systems can be used. Whether it’s an industry, a company, or even a villa, HVAC is always recommended. It creates better air quality, supports comfortable temperatures, and keeps every space running smoothly.',
    open: false
  },
  {
    id:6,
    qns:'Is Daikin’s air conditioning unit suitable for both commercial and residential use?',
    ans:'Yes, it is a great choice for both commercial and residential use. You can select the model based on your specific requirements, and it will deliver reliable performance in any type of space.',
  },
]

    constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('HVAC suppliers in Sharjah, UAE | Daikin company HVAC systems dealer dealers in UAE');

    this.metaService.updateTag({
      name: 'description',
      content: ' Choose best hvac suppliers in sharjah based on your equipment. yes we are hvac equipment, hvac systems dealers in sharjah to supplying daikin brand solution.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'MEPTECH, DAIKIN AUTHORIZED DEALER, DAIKIN DEALER IN UAE, AIR CONDITION TRADING, AC UNITS, AC DEALER, AIR CONDITION, HVAC, VRV, VRF, VRV INSTALLATION, VRV SERVICE, FCU, FAN COIL UNITS, FLOWBAR, HIDDEN FRAME DIFFUSER, VAV, PRESSURE INDEPENDENT VAV, BY PASS VAV, LOUVERS, SAND TRAP LOUVERS, CROSS TALK ATTENUATORS'
    });

    this.metaService.updateTag({ property: 'og:title', content: ' HVAC suppliers in Sharjah, UAE | Daikin company HVAC systems dealer dealers in UAE' });
    this.metaService.updateTag({ property: 'og:description', content: ' Choose best hvac suppliers in sharjah based on your equipment. yes we are hvac equipment, hvac systems dealers in sharjah to supplying daikin brand solution.' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://meptechuae.com/seo/featuredSHARJAH.jpg'});
    this.metaService.updateTag({ property: 'og:url', content: 'https://meptechuae.com/hvac-accessories-suppliers-in-sharjah' });
  }
  toggleFAQ(index: number): void {
    this.faqs.forEach((faq, i) => {
      faq.open = i === index ? !faq.open : false;
    });
  }
}
