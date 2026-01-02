import { Component,OnInit } from '@angular/core';
import { BannerComponent } from "../../shared/banner/banner.component";
import { CommonModule } from '@angular/common';
import { Projects } from '../../data/projects';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-projects',
  imports: [BannerComponent, CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects = Projects

  constructor(private title: Title) {}
    ngOnInit(): void {
    this.title.setTitle('Projects | MEPTECH Air-condition Trading LLC');
    }
}
