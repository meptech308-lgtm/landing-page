// contactusdefault.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactusdefault',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactusdefault.component.html',
  styleUrl: './contactusdefault.component.css'
})
export class ContactusdefaultComponent implements OnInit {
  productName: string = 'Product';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get product name from query params if available
    this.route.queryParams.subscribe(params => {
      if (params['product']) {
        this.productName = params['product'];
      }
    });
  }

  callNow() {
    window.location.href = 'tel:+97144919004';
  }

  whatsappNow() {
    const message = encodeURIComponent(`Hi, I'm interested in ${this.productName}. Please provide more details.`);
    window.open(`https://wa.me/971503471731?text=${message}`, '_blank');
  }

  emailNow() {
    const subject = encodeURIComponent(`Inquiry about ${this.productName}`);
    const body = encodeURIComponent(`Hi,\n\nI would like to know more about ${this.productName}.\n\nPlease provide detailed information.\n\nThank you.`);
    window.location.href = `mailto:sales@meptechuae.com?subject=${subject}&body=${body}`;
  }
}