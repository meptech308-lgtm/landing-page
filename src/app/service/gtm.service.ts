import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GtmService {

  constructor() { }

  pushEvent(eventData: any) {
    if (window && (window as any).dataLayer) {
      (window as any).dataLayer.push(eventData);
    } else {
      console.warn('GTM dataLayer not found');
    }
  }
}
