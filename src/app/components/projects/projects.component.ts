import { Component } from '@angular/core';
import { BannerComponent } from "../../shared/banner/banner.component";
import { CommonModule } from '@angular/common';
import { Projects } from '../../data/projects';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [BannerComponent, CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = Projects
}
