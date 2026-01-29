import { Component, OnInit } from '@angular/core';
import { BannerComponent } from "../../shared/banner/banner.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Products } from '../../data/products';
import { Meta, Title } from '@angular/platform-browser';

interface FeatureCard {
  id: number;
  img: string;
  head: string;
  para: string;
}

interface FeaturedCategory {
  id: number;
  img: string;
  head: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  cards: FeatureCard[] = [
    {
      id: 1,
      img: '/card0.png',
      head: 'Authorized Daikin Dealer',
      para: 'Official partner for complete Daikin Air conditioning products offering full scope technical, selection, warranty and after sales support.'
    },
    {
      id: 2,
      img: '/card1.png',
      head: '15+ Years Experience',
      para: 'With over 15 years of proven expertise in delivering HVAC system solutions, we proudly partner with the world\'s leading HVAC brands'
    },
    {
      id: 3,
      img: '/card2.png',
      head: 'Innovative and Efficient Solutions',
      para: 'Advanced systems that reduce energy consumption by up to 40% while maintaining optimal comfort'
    },
    {
      id: 4,
      img: '/card3.png',
      head: 'Young, Dynamic Team',
      para: 'Team of qualified engineers, HVAC system specialists, and operations experts dedicated to your success'
    },
  ];

  featured: FeaturedCategory[] = [
    {
      id: 1,
      img: '/image1.png',
      head: 'AC EQUIPMENTS',
      description: 'Complete range of Daikin AC units, VRV systems, and energy-efficient air-conditioning solutions for residential, commercial, and industrial projects.'
    },
    {
      id: 2,
      img: '/images.jpeg',
      head: 'AIR DISTRIBUTION PRODUCTS',
      description: 'High-quality air distribution products including ducting, diffusers, grilles, and louvers designed to optimize airflow and comfort.'
    },
    {
      id: 3,
      img: '/image3.png',
      head: 'VENTILATIONS',
      description: 'Advanced ventilation solutions including VAVs, Flowbars, and air handling systems to maintain optimal indoor air quality.'
    },
    {
      id: 4,
      img: '/image4.png',
      head: 'CONTROL UNITS',
      description: 'Smart control systems and automation units for precise temperature, airflow, and energy management across HVAC setups.'
    },
  ];

  products = Products;

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.updateMetaTags();
    this.initializeAnimations();
  }

  /**
   * Navigate to products page with selected category
   */
  goToProducts(head: string): void {
    const categoryMapping: { [key: string]: string } = {
      'AC EQUIPMENTS': 'AC Equipments',
      'AIR DISTRIBUTION PRODUCTS': 'Air Distribution',
      'VENTILATIONS': 'Ventilation',
      'CONTROL UNITS': 'Controls'
    };

    const category = categoryMapping[head] || head;
    this.router.navigate(['/products'], { state: { category } });
  }

  /**
   * Initialize scroll-triggered animations
   */
  private initializeAnimations(): void {
    if (typeof window === 'undefined') return;

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    setTimeout(() => {
      const animatedElements = document.querySelectorAll(
        '.animate-fade-in, .animate-slide-up, .animate-slide-right, .animate-slide-left, .animate-scale'
      );
      
      animatedElements.forEach(el => observer.observe(el));
    }, 100);
  }

  /**
   * Update meta tags for SEO
   */
  private updateMetaTags(): void {
    // Page Title
    this.titleService.setTitle('MEPTECH HVAC Solutions | Authorized Daikin Dealer in UAE');

    // Meta Description
    this.metaService.updateTag({
      name: 'description',
      content: 'MEPTECH Air-condition Trading LLC delivers innovative HVAC solutions in UAE including Daikin AC systems, VRV, Fan Coil Units (FCU), air distribution products, VAVs, Flowbars, and Louvers. Trusted partner for all HVAC projects with 15+ years experience.'
    });

    // Keywords
    this.metaService.updateTag({
      name: 'keywords',
      content: 'MEPTECH, DAIKIN AUTHORIZED DEALER, DAIKIN DEALER UAE, HVAC SOLUTIONS UAE, AC UNITS, VRV SYSTEMS, VRF SYSTEMS, FCU, FAN COIL UNITS, AIR DISTRIBUTION, VAV, FLOWBAR, LOUVERS, HVAC DUBAI, AIR CONDITIONING UAE, VENTILATION SYSTEMS'
    });

    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'MEPTECH HVAC Solutions | Authorized Daikin Dealer in UAE'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Innovative HVAC solutions including VRV, FCU, and Air Distribution Products. Trusted Daikin dealer in UAE with 15+ years experience.'
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://meptechuae.com/logo1.png'
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://meptechuae.com'
    });

    // Twitter Card Tags
    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.metaService.updateTag({
      name: 'twitter:title',
      content: 'MEPTECH HVAC Solutions | Authorized Daikin Dealer in UAE'
    });

    this.metaService.updateTag({
      name: 'twitter:description',
      content: 'End-to-end HVAC solutions including VRV, FCU, and airside products. Reliable Daikin dealer UAE with proven expertise.'
    });

    this.metaService.updateTag({
      name: 'twitter:image',
      content: 'https://meptechuae.com/logo1.png'
    });

    // Additional SEO Tags
    this.metaService.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large'
    });

    this.metaService.updateTag({
      name: 'author',
      content: 'MEPTECH Air-condition Trading LLC'
    });

    this.metaService.updateTag({
      name: 'geo.region',
      content: 'AE'
    });

    this.metaService.updateTag({
      name: 'geo.placename',
      content: 'Dubai, UAE'
    });

    // Structured Data
    this.addStructuredData();
  }

  /**
   * Add JSON-LD structured data for SEO
   */
  private addStructuredData(): void {
    if (typeof document === 'undefined') return;

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MEPTECH Air-condition Trading LLC",
      "url": "https://meptechuae.com",
      "logo": "https://meptechuae.com/logo1.png",
      "description": "Leading HVAC solutions provider and authorized Daikin dealer in UAE",
      "telephone": "+971523124576",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "areaServed": ["UAE", "Dubai", "Abu Dhabi", "Sharjah"],
      "sameAs": []
    };

    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "MEPTECH Air-condition Trading LLC",
      "image": "https://meptechuae.com/logo1.png",
      "telephone": "+971523124576",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "priceRange": "$$",
      "openingHours": "Mo-Sa 08:00-18:00"
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "HVAC Installation and Supply",
      "provider": {
        "@type": "Organization",
        "name": "MEPTECH Air-condition Trading LLC"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "HVAC Products and Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Daikin VRV Systems"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Air Distribution Products"
            }
          }
        ]
      }
    };

    // Add schemas to page
    this.insertSchema('organization-schema', organizationSchema);
    this.insertSchema('local-business-schema', localBusinessSchema);
    this.insertSchema('service-schema', serviceSchema);
  }

  /**
   * Insert structured data script into document head
   */
  private insertSchema(id: string, schema: any): void {
    if (typeof document === 'undefined') return;

    // Remove existing schema if present
    const existing = document.getElementById(id);
    if (existing) {
      existing.remove();
    }

    // Create and insert new schema
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}