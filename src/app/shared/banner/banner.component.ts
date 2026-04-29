import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, Subscription } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';

interface BannerData {
  img: string;
  title: string;
  subtitle: string;
  seoTitle?: string;
  seoDesc?: string;
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnDestroy {
  private routerSub!: Subscription;

  currentBanner!: BannerData;
  headlineLines: string[] = [];

  private bannerData: Record<string, BannerData> = {
    '/': {
      img: '/banner1.png',
      title: 'HVAC PRODUCT SOLUTIONS PARTNER',
      subtitle:
        'Trusted by MEP consultants and contractors across the UAE for reliable HVAC solutions',
      seoTitle: 'HVAC Solutions UAE | MEPTECH',
      seoDesc:
        'Trusted HVAC solutions provider in UAE offering air conditioning, ventilation, and control systems for commercial and residential applications.',
    },

    '/services': {
      img: '/banner3.png',
      title: 'Reliable HVAC Services & Maintenance',
      subtitle:
        'Ensure year-round comfort with our expert maintenance, repair, and system upgrade services—backed by certified professionals and Daikin quality.',
      seoTitle: 'HVAC Services UAE | Maintenance & Repair | MEPTECH',
      seoDesc:
        'Get expert HVAC maintenance, repair, and upgrade services in UAE. Ensure reliable performance and long-term efficiency with certified professionals.',
    },

    '/projects': {
      img: '/banner3.png',
      title: 'Our HVAC Project Expertise',
      subtitle:
        "Explore our successful HVAC system installations across commercial, residential, and industrial sectors, powered by Daikin's trusted technology.",
      seoTitle: 'Completed HVAC Projects UAE | MEP Case Studies | MEPTECH',
      seoDesc:
        'Explore HVAC projects in UAE by trusted Daikin experts. View successful installations, innovative solutions, and proven performance across industries.',
    },

    '/contact': {
      img: '/banner3.png',
      title: "Let's Talk HVAC Solutions",
      subtitle:
        'Need assistance or have a project in mind? Reach out to our HVAC experts for tailored advice and support.',
      seoTitle: 'Contact HVAC Experts UAE | MEPTECH',
      seoDesc:
        'Contact MEPTECH for HVAC solutions in UAE. Get expert consultation, product support, and customized system solutions for your projects.',
    },

    '/products': {
      img: '/banner2.png',
      title: 'Explore Our Products',
      subtitle:
        'Explore our full range of AC Equipment, Air Distribution, Ventilation, and Controls. As an Authorized Daikin Dealer, we deliver genuine, high-performance products supported by precision-engineered solutions.',
      seoTitle: 'HVAC Products UAE | Daikin AC & Ventilation Systems | MEPTECH',
      seoDesc:
        'Browse HVAC products in UAE including Daikin AC systems. Discover VRV, split units, ventilation, and advanced cooling solutions for all applications.',
    },

    default: {
      img: '/banner1.png',
      title: 'HVAC Product Solutions Partner',
      subtitle:
        'Trusted by MEP consultants and contractors across the UAE for reliable HVAC solutions',
      seoTitle: 'HVAC Solutions UAE | MEPTECH',
      seoDesc:
        'Leading HVAC solutions provider in UAE offering advanced cooling, ventilation, and air distribution systems.',
    },
  };

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta,
  ) {
    this.updateBanner(this.router.url);

    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateBanner(event.urlAfterRedirects);
      });
  }

  private updateBanner(url: string): void {
    const cleanUrl = url.split('?')[0];

    const matchingKey = Object.keys(this.bannerData)
      .filter((key) => key !== 'default')
      .sort((a, b) => b.length - a.length)
      .find((key) => cleanUrl.startsWith(key));

    this.currentBanner = matchingKey
      ? this.bannerData[matchingKey]
      : this.bannerData['default'];

    // ✅ SET SEO HERE
    this.title.setTitle(this.currentBanner.seoTitle || '');

    this.meta.updateTag({
      name: 'description',
      content: this.currentBanner.seoDesc || '',
    });

    this.meta.updateTag({
      property: 'og:title',
      content: this.currentBanner.seoTitle || '',
    });

    this.meta.updateTag({
      property: 'og:description',
      content: this.currentBanner.seoDesc || '',
    });

    this.headlineLines = this.splitHeadline(this.currentBanner.title);
  }

  private splitHeadline(title: string): string[] {
    const words = title.split(' ');

    if (words.length <= 3) return [title];

    if (words.length <= 5) {
      const mid = Math.ceil(words.length / 2);
      return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
    }

    const third = Math.ceil(words.length / 3);
    return [
      words.slice(0, third).join(' '),
      words.slice(third, third * 2).join(' '),
      words.slice(third * 2).join(' '),
    ];
  }

  goTo(url: string): void {
    this.router.navigate([url]);
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }
}
