import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GtmService } from './service/gtm.service';
import { filter, map, mergeMap } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'meptech';

  constructor(
    private router: Router,
    private gtm: GtmService,
    private route: ActivatedRoute,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (isPlatformBrowser(this.platformId)) {
          if ((window as any).gtag) {
            (window as any).gtag('config', 'G-XXXX');
          }
        }
      }
    });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.route;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data),
      )
      .subscribe((data) => {
        const pageTitle = data['title'] || this.titleService.getTitle();
        const pagePath = this.router.url;

        this.gtm.pushEvent({
          event: 'page_view',
          page_title: pageTitle,
          page_path: pagePath,
        });
      });
  }
}
