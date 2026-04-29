import { Component, OnInit, OnDestroy } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { CommonModule } from '@angular/common';
import { Projects } from '../../data/projects';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [BannerComponent, CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects = Projects;
  currentIndex = 0;
  intervalId: any;

  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    // ✅ SEO Title
    this.title.setTitle(
      'Completed HVAC Projects UAE | MEP Case Studies | MEPTECH',
    );

    // ✅ Meta Description
    this.meta.updateTag({
      name: 'description',
      content:
        'Explore HVAC projects in UAE by trusted Daikin experts. View successful installations, innovative solutions, and proven performance across industries.',
    });

    // ✅ Keywords
    this.meta.updateTag({
      name: 'keywords',
      content:
        'HVAC projects UAE, MEP projects UAE, Daikin installations UAE, HVAC case studies UAE, commercial HVAC UAE',
    });

    // ✅ Open Graph (for sharing)
    this.meta.updateTag({
      property: 'og:title',
      content: 'Completed HVAC Projects UAE | MEP Case Studies | MEPTECH',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Explore HVAC projects in UAE by trusted Daikin experts. View successful installations, innovative solutions, and proven performance across industries.',
    });
    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  next() {
    this.currentIndex =
      this.currentIndex === this.projects.length - 1
        ? 0
        : this.currentIndex + 1;
  }

  prev() {
    this.currentIndex =
      this.currentIndex === 0
        ? this.projects.length - 1
        : this.currentIndex - 1;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }

  // startAutoPlay() {
  //   this.intervalId = setInterval(() => {
  //     this.next();
  //   }, 5000);
  // }
}
