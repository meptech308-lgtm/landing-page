import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear = new Date().getFullYear();

  footerData: any = {
    '/': {
      heading: 'Ready to Start Your HVAC Project?',
      subtext: 'Get professional consultation and competitive quotes for your HVAC requirements'
    },
    '/products': {
      heading: 'Need Assistance?',
      subtext: 'Our certified engineers are ready to help you select the right equipment for your project requirements'
    },
    '/services': {
      heading: 'Ready to Start Your HVAC Project?',
      subtext: 'Get professional consultation and competitive quotes for your HVAC requirements'
    },
    '/projects': {
      heading: 'Ready to Start Your HVAC Project?',
      subtext: 'Get professional consultation and competitive quotes for your HVAC requirements'
    },
    '/about': {
      heading: 'Need Assistance?',
      subtext: 'Our certified engineers are ready to help you select the right equipment for your project requirements'
    },
    '/contact': {
      heading: 'Ready to Start Your HVAC Project?',
      subtext: 'Get professional consultation and competitive quotes for your HVAC requirements'
    },
    'default': {
      heading: 'Ready to Start Your HVAC Project?',
      subtext: 'Get professional consultation and competitive quotes for your HVAC requirements'
    }
  };

  currentFooter = this.footerData['default'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setFooter(this.router.url);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setFooter(event.urlAfterRedirects);
      }
    });
  }

  private setFooter(url: string) {
    const currentUrl = url.split('?')[0];
    const matchingKey = Object.keys(this.footerData)
      .filter(key => key !== 'default')
      .sort((a, b) => b.length - a.length)
      .find(key => currentUrl.startsWith(key));

    this.currentFooter = matchingKey ? this.footerData[matchingKey] : this.footerData['default'];
  }

  goTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
