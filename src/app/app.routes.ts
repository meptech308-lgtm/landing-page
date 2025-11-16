import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ZohoComponent } from './components/zoho/zoho.component';
import {HvacAccessoriesSuppliersInUaeComponent } from './components/seopages/hvac-accessories-suppliers-in-uae/hvac-accessories-suppliers-in-uae.component';
import { HvacAccessoriesSuppliersInDubaiComponent } from './components/seopages/hvac-accessories-suppliers-in-dubai/hvac-accessories-suppliers-in-dubai.component';
import { HvacAccessoriesSuppliersInAbuDhabiComponent } from './components/seopages/hvac-accessories-suppliers-in-abu-dhabi/hvac-accessories-suppliers-in-abu-dhabi.component';
import { HvacAccessoriesSuppliersInSharjahComponent } from './components/seopages/hvac-accessories-suppliers-in-sharjah/hvac-accessories-suppliers-in-sharjah.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:id', component: ProjectDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'newsletter', component: NewsletterComponent },
    { path: 'zoho', component: ZohoComponent },
    { path: 'products', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) },

    { path: 'hvac-accessories-suppliers-in-uae', component: HvacAccessoriesSuppliersInUaeComponent },
    { path: 'hvac-accessories-suppliers-in-dubai', component: HvacAccessoriesSuppliersInDubaiComponent },
    { path: 'hvac-accessories-suppliers-in-abu-dhabi', component: HvacAccessoriesSuppliersInAbuDhabiComponent },
    { path: 'hvac-accessories-suppliers-in-sharjah', component: HvacAccessoriesSuppliersInSharjahComponent },
];
