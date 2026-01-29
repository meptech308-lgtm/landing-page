import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

interface FAQ {
  qns: string;
  ans: string;
  open: boolean;
}

@Component({
  selector: 'app-daikin-vrv-systems-dubai',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daikin-vrv-systems-dubai.component.html',
  styleUrl: './daikin-vrv-systems-dubai.component.css'
})
export class DaikinVrvSystemsDubaiComponent implements OnInit {

  faqs: FAQ[] = [
    {
      qns: 'What is a VRV air conditioning system?',
      ans: 'VRV (Variable Refrigerant Volume) is an advanced HVAC technology developed by Daikin that allows multiple indoor units to be connected to a single outdoor unit, providing precise temperature control and high energy efficiency.',
      open: false
    },
    {
      qns: 'Is VRV the same as VRF?',
      ans: 'Yes. VRF stands for Variable Refrigerant Flow. VRV is the original patented term coined by Daikin, while VRF is commonly used as a generic industry term for similar systems.',
      open: false
    },
    {
      qns: 'Which is better: VRV or VRF?',
      ans: 'Daikin VRV systems are considered premium VRF solutions due to their advanced inverter technology, high reliability, and superior performance in extreme climates such as the UAE.',
      open: false
    },
    {
      qns: 'What are the types of Daikin VRV systems?',
      ans: 'Daikin offers multiple VRV systems including VRV IV+, VRV X (cooling-only), and VRV APT—each designed for different project sizes and performance requirements.',
      open: false
    },
    {
      qns: 'Who is the authorized Daikin VRV dealer in Dubai?',
      ans: 'MEPTECH is an authorized Daikin dealer in Dubai, supplying genuine VRV systems with professional HVAC support across the UAE.',
      open: false
    },
    {
      qns: 'What are the advantages of VRV systems?',
      ans: 'VRV systems offer superior energy efficiency, precise zone control, quiet operation, flexible design options, reduced installation costs, and long-term reliability, making them ideal for UAE climate conditions.',
      open: false
    },
    {
      qns: 'How much does a Daikin VRV system cost in Dubai?',
      ans: 'VRV system costs vary based on project size, system configuration, and specific requirements. Contact MEPTECH for a detailed quotation tailored to your commercial or residential project.',
      open: false
    }
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.setPageMetadata();
    this.addStructuredData();
  }

  private setPageMetadata(): void {
    // Page Title
    this.title.setTitle(
      'Daikin VRV Systems Dubai | Authorized VRF Dealer UAE | MEPTECH'
    );

    // Meta Description
    this.meta.updateTag({
      name: 'description',
      content: 'MEPTECH - Authorized Daikin VRV dealer in Dubai. Supply & install VRV IV+, VRV X, VRV APT systems. Expert HVAC solutions for commercial & residential projects across UAE. Call +971523124576'
    });

    // Keywords
    this.meta.updateTag({
      name: 'keywords',
      content: 'Daikin VRV Dubai, VRF system UAE, Daikin authorized dealer, VRV IV+, VRV X, VRV APT, HVAC Dubai, air conditioning UAE, MEPTECH, commercial HVAC, residential AC systems'
    });

    // Open Graph Tags
    this.meta.updateTag({
      property: 'og:title',
      content: 'Daikin VRV Systems Dubai | Authorized Dealer | MEPTECH'
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Leading Daikin authorized dealer in Dubai. Premium VRV air conditioning systems for commercial and residential projects. Expert installation and support.'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.updateTag({
      property: 'og:image',
      content: '/seo/daikin-vrv-systems-uae.jpeg'
    });

    // Twitter Card Tags
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Daikin VRV Systems Dubai | Authorized Dealer UAE'
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Premium Daikin VRV air conditioning systems in Dubai. Authorized dealer with expert HVAC solutions for UAE projects.'
    });

    // Additional SEO Tags
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    });

    this.meta.updateTag({
      name: 'author',
      content: 'MEPTECH'
    });

    this.meta.updateTag({
      name: 'geo.region',
      content: 'AE-DU'
    });

    this.meta.updateTag({
      name: 'geo.placename',
      content: 'Dubai'
    });

    this.meta.updateTag({
      name: 'language',
      content: 'en'
    });
  }

  private addStructuredData(): void {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MEPTECH",
      "description": "Authorized Daikin VRV dealer in Dubai, UAE",
      "url": window.location.origin,
      "telephone": "+971523124576",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    };

    // Product Schema
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Daikin VRV Air Conditioning Systems",
      "description": "Advanced VRV (Variable Refrigerant Volume) air conditioning systems for commercial and residential projects",
      "brand": {
        "@type": "Brand",
        "name": "Daikin"
      },
      "image": "/seo/daikin-vrv-systems-uae.jpeg",
      "offers": {
        "@type": "AggregateOffer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "AED"
      }
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": this.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.qns,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.ans
        }
      }))
    };

    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "MEPTECH - Daikin VRV Systems Dubai",
      "description": "Authorized Daikin dealer supplying VRV air conditioning systems in Dubai",
      "telephone": "+971523124576",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "areaServed": ["Dubai", "UAE", "United Arab Emirates"],
      "priceRange": "$$"
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "HVAC Installation and Supply",
      "provider": {
        "@type": "Organization",
        "name": "MEPTECH"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      "description": "Supply and installation of Daikin VRV air conditioning systems for commercial and residential projects"
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Daikin VRV Systems",
          "item": window.location.href
        }
      ]
    };

    // Add all schemas to the page
    this.addSchemaToHead('organization', organizationSchema);
    this.addSchemaToHead('product', productSchema);
    this.addSchemaToHead('faq', faqSchema);
    this.addSchemaToHead('localbusiness', localBusinessSchema);
    this.addSchemaToHead('service', serviceSchema);
    this.addSchemaToHead('breadcrumb', breadcrumbSchema);
  }

  private addSchemaToHead(id: string, schema: any): void {
    // Remove existing schema if present
    const existingScript = document.getElementById(`schema-${id}`);
    if (existingScript) {
      existingScript.remove();
    }

    // Add new schema
    const script = document.createElement('script');
    script.id = `schema-${id}`;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  toggleFAQ(index: number): void {
    // Close all other FAQs and toggle the clicked one
    this.faqs.forEach((faq, i) => {
      faq.open = i === index ? !faq.open : false;
    });
  }
}