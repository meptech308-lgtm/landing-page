import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { RandomlistComponent } from "../randomlist/randomlist.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fancoilunits',
  standalone: true,
  imports: [CommonModule, RandomlistComponent],
  templateUrl: './fancoilunits.component.html',
  styleUrl: './fancoilunits.component.css'
})
export class FancoilunitsComponent implements OnInit, AfterViewInit {

  /* ================= PRODUCT DATA ================= */

  product = {
    mainImg: '/products/fancoil/main.png',
    name: 'Fan Coil Units',
    about:
      'Daikin chilled water fan coil units are designed for efficient and quiet air conditioning in commercial and residential buildings.',
    groups: [
      {
        name: 'Cassette Fan Coil Units',
        points: [
          'Compact design',
          '4-way air discharge',
          'Built-in drain pump',
          'Low noise operation'
        ],
        img: '/products/fancoil/1.png'
      }
    ]
  };

  /* ================= SEO ================= */

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      'Daikin Chilled Water Fan Coil Units (FCU) | FWWVA & FWWTA | MEPTECH UAE'
    );

    this.metaService.updateTag({
      name: 'description',
      content:
        'Daikin chilled water fan coil units (FCU) including FWWVA and FWWTA models for efficient HVAC cooling across UAE.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Daikin FCU, Chilled Water Fan Coil Unit, FWWVA, FWWTA, HVAC UAE'
    });
  }

  /* ================= COUNTERS ================= */

  @ViewChild('statsSection') statsSection!: ElementRef;

  years = 0;
  savings = 0;
  projects = 0;

  private animated = false;

  ngAfterViewInit(): void {
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
    this.runCounter('years', 100, 1200);
    this.runCounter('savings', 40, 1200);
    this.runCounter('projects', 1000, 1400);
  }

  runCounter(
    key: 'years' | 'savings'  | 'projects',
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
