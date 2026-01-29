import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, Subscription } from 'rxjs';

interface BannerData {
  img: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
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
        'Trusted by MEP consultants and contractors across the UAE for reliable HVAC solutions'
    },
    '/services': {
      img: '/banner3.png',
      title: 'Reliable HVAC Services & Maintenance',
      subtitle:
        'Ensure year-round comfort with our expert maintenance, repair, and system upgrade services—backed by certified professionals and Daikin quality.'
    },
    '/projects': {
      img: '/banner3.png',
      title: 'Our HVAC Project Expertise',
      subtitle:
        'Explore our successful HVAC system installations across commercial, residential, and industrial sectors, powered by Daikin\'s trusted technology.'
    },
    '/contact': {
      img: '/banner3.png',
      title: 'Let\'s Talk HVAC Solutions',
      subtitle:
        'Need assistance or have a project in mind? Reach out to our HVAC experts for tailored advice and support.'
    },
    '/products': {
      img: '/banner2.png',
      title: 'Explore Our Products',
      subtitle:
        'Explore our full range of AC Equipment, Air Distribution, Ventilation, and Controls. As an Authorized Daikin Dealer, we deliver genuine, high-performance products supported by precision-engineered solutions.'
    },
    default: {
      img: '/banner1.png',
      title: 'HVAC Product Solutions Partner',
      subtitle:
        'Trusted by MEP consultants and contractors across the UAE for reliable HVAC solutions'
    }
  };

  constructor(private router: Router) {
    this.updateBanner(this.router.url);

    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateBanner(event.urlAfterRedirects);
      });
  }

  private updateBanner(url: string): void {
    const cleanUrl = url.split('?')[0];

    const matchingKey = Object.keys(this.bannerData)
      .filter(key => key !== 'default')
      .sort((a, b) => b.length - a.length)
      .find(key => cleanUrl.startsWith(key));

    this.currentBanner =
       matchingKey ? this.bannerData[matchingKey] : this.bannerData['default'];


    this.headlineLines = this.splitHeadline(this.currentBanner.title);
  }

  private splitHeadline(title: string): string[] {
    const words = title.split(' ');

    if (words.length <= 3) {
      return [title];
    }

    if (words.length <= 5) {
      const mid = Math.ceil(words.length / 2);
      return [
        words.slice(0, mid).join(' '),
        words.slice(mid).join(' ')
      ];
    }

    const third = Math.ceil(words.length / 3);
    return [
      words.slice(0, third).join(' '),
      words.slice(third, third * 2).join(' '),
      words.slice(third * 2).join(' ')
    ];
  }

  goTo(url: string): void {
    this.router.navigate([url]);
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }
}
