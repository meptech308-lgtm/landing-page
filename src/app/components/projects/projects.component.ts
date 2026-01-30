import { Component, OnInit, OnDestroy } from '@angular/core';
import { BannerComponent } from "../../shared/banner/banner.component";
import { CommonModule } from '@angular/common';
import { Projects } from '../../data/projects';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [BannerComponent, CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects = Projects;
  currentIndex = 0;
  intervalId: any;

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Projects | MEPTECH Air-condition Trading LLC');
    // this.startAutoPlay();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  next() {
    this.currentIndex =
      this.currentIndex === this.projects.length - 1 ? 0 : this.currentIndex + 1;
  }

  prev() {
    this.currentIndex =
      this.currentIndex === 0 ? this.projects.length - 1 : this.currentIndex - 1;
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
