import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit, OnInit {
  noteBackground = 'url(/banner2.png)';

  isMuted = true;
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}

  ngOnInit() {
    this.updateMetaTags();
  }

  ngAfterViewInit() {
    this.bgVideo.nativeElement.muted = this.isMuted;
  }

  toggleMute(video: HTMLVideoElement) {
    this.isMuted = !this.isMuted;
    video.muted = this.isMuted;
  }

  private updateMetaTags() {
    this.titleService.setTitle(
      'About MEPTECH UAE | Authorized Daikin HVAC Dealer',
    );

    this.metaService.updateTag({
      name: 'description',
      content:
        ' Learn about MEP Tech UAE, a trusted Daikin HVAC partner. Discover expertise, quality solutions, and commitment to delivering reliable cooling systems.',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'MEPTECH, DAIKIN AUTHORIZED DEALER, AIR CONDITION TRADING, HVAC UAE, VRV, VRF, VRV INSTALLATION, VRV SERVICE, FCU, FAN COIL UNITS, VAV, LOUVERS, FLOWBAR, HIDDEN FRAME DIFFUSER',
    });

    // Open Graph
    this.metaService.updateTag({
      property: 'og:title',
      content: 'About MEPTECH UAE | Authorized Daikin HVAC Dealer',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content:
        'MEPTECH, DAIKIN AUTHORIZED DEALER, AIR CONDITION TRADING, HVAC UAE, VRV, VRF, VRV INSTALLATION, VRV SERVICE, FCU, FAN COIL UNITS, VAV, LOUVERS, FLOWBAR, HIDDEN FRAME DIFFUSER',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://meptechuae.com/logo1.png',
    });

    // Twitter
    this.metaService.updateTag({
      property: 'twitter:title',
      content: 'About MEPTECH UAE | Authorized Daikin HVAC Dealer',
    });
    this.metaService.updateTag({
      property: 'twitter:description',
      content:
        'MEPTECH delivers HVAC excellence in UAE with VRV, FCU, VAV, and air distribution products.',
    });
    this.metaService.updateTag({
      property: 'twitter:image',
      content: 'https://meptechuae.com/logo1.png',
    });
  }
}
