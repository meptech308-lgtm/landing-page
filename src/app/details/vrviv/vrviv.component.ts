import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { RandomlistComponent } from "../randomlist/randomlist.component";
import { CarouselComponent } from "../shared/carousel/carousel.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vrviv',
  standalone: true,
  imports: [CommonModule, RandomlistComponent, CarouselComponent],
  templateUrl: './vrviv.component.html',
  styleUrl: './vrviv.component.css'
})
export class VrvivComponent implements OnInit, AfterViewInit {

  /* ================= PRODUCT DATA ================= */

  product = {
    mainImg: '/products/vrviv+/1.png',
    mainImgs: [
      '/products/vrviv+/main1.jpg',
      '/products/vrviv+/main2.png',
      '/products/vrviv+/main3.webp',
      '/products/vrviv+/main4.jpg',
      '/products/vrviv+/main5.jpg',
    ],
    imgPoints: [
      {
        no: 1,
        head: 'DC Fan Motor',
        points: [
          'Higher efficiency and reduced power consumption',
          'Larger rotor diameter for improved airflow',
          'Precise fan speed control matching load demand'
        ]
      },
      {
        no: 2,
        head: 'Gas-Cooled PCB',
        points: [
          'Reliable cooling independent of ambient temperature',
          'Compact switch box for smoother airflow'
        ]
      },
      {
        no: 3,
        head: '4-Sided Heat Exchanger',
        points: [
          '50% larger heat exchange surface',
          'Up to 30% improvement in efficiency'
        ]
      },
      {
        no: 4,
        head: 'Advanced Inverter Compressor',
        points: [
          'Back-pressure control improves part-load efficiency',
          'Full inverter enables Variable Refrigerant Temperature (VRT)',
          'Brushless DC motor for higher efficiency'
        ]
      }
    ],
    name: 'Daikin VRV IV+',
    short:
      'Advanced VRV system delivering exceptional energy efficiency, flexible design, and superior comfort.',
    work:
      'Variable Refrigerant Temperature (VRT) control dynamically optimizes refrigerant conditions to achieve maximum seasonal efficiency at partial load.',
    subImg: '/products/vrviv+/2.png'
  };

  /* ================= SEO ================= */

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      'Daikin VRV IV+ System | VRV HVAC Supplier & Installation UAE | MEPTECH'
    );

    this.metaService.updateTag({
      name: 'description',
      content:
        'Daikin VRV IV+ variable refrigerant volume HVAC system for commercial and residential projects in UAE. Authorized Daikin dealer – MEPTECH.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Daikin VRV IV+, VRV system UAE, VRV HVAC Dubai, VRF system UAE, Daikin VRV dealer'
    });
     this.titleService.setTitle(
        'Daikin VRV IV+ System | VRV HVAC Supplier & Installation UAE | MEPTECH'
      );

      this.metaService.updateTag({
        name: 'description',
        content:
          'Daikin VRV IV+ variable refrigerant volume HVAC system for commercial and residential projects in UAE. Supplied and supported by MEPTECH, authorized Daikin dealer.'
      });

      this.metaService.updateTag({
        name: 'keywords',
        content:
          'Daikin VRV IV+, VRV system UAE, VRV HVAC supplier, Daikin VRV dealer UAE, VRF system Dubai, HVAC installation UAE'
      });

  }

  /* ================= COUNTERS ================= */

  @ViewChild('statsSection') statsSection!: ElementRef;

  indoorUnits = 0;
  savings = 0;
  piping = 0;
  experience = 0;

  private animated = false;

  ngAfterViewInit(): void {
    if (!this.statsSection) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !this.animated) {
          this.animateCounters();
          this.animated = true;
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(this.statsSection.nativeElement);
  }

  animateCounters(): void {
    this.runCounter('indoorUnits', 64, 1200);
    this.runCounter('savings', 50, 1200);
    this.runCounter('piping', 1000, 1400);
    this.runCounter('experience', 25, 1000);
  }

  runCounter(
    key: 'indoorUnits' | 'savings' | 'piping' | 'experience',
    target: number,
    duration: number
  ): void {
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      this[key] = Math.floor(progress * target);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
}
