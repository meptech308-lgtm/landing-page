import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-zoho',
  imports: [],
  templateUrl: './zoho.component.html',
  styleUrl: './zoho.component.css'
})
export class ZohoComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.text = `
      function wfa_pstMesgFrmFom(evt) {
        if (evt.origin === 'https://crm.zoho.com' || evt.origin === 'https://crm.zohopublic.com') {
          var loc_obj = JSON.stringify({
            origin: window.location.origin, pathname: window.location.pathname, search: window.location.search, hash: window.location.hash
          });
          evt.source.postMessage(('prnt_wnd_pg_lc_rc_frm_prwindow_' + loc_obj), evt.origin);
        }
      }
      window.addEventListener('message', wfa_pstMesgFrmFom, false);
    `;
    this.renderer.appendChild(document.body, script);
  }

}
