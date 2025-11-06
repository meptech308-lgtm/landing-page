import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Home' } },
    { path: 'services', component: ServicesComponent, data: { title: 'Services' } },
    { path: 'projects', component: ProjectsComponent, data: { title: 'Projects' } },
    { path: 'projects/:id', component: ProjectDetailComponent, data: { title: 'Project Details' } },
    { path: 'about', component: AboutComponent, data: { title: 'About Us' } },
    { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
    { path: 'newsletter', component: NewsletterComponent },
    { path: 'products', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule), data: { title: 'Products' } }
];
