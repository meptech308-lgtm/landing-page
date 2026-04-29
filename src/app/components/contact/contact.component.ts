import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BannerComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  showPopup: boolean = false;

  productTypes: string[] = [
    'AC EQUIPMENTS',
    'VENTILATION',
    'AIR DISTRIBUTION',
    'CONTROLS',
  ];

  constructor(
    private fb: FormBuilder,
    private title: Title,
    private meta: Meta,
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      productType: ['', Validators.required],
      productName: ['', Validators.required],
      company: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.title.setTitle(
      'Contact HVAC Experts UAE | HVAC Supplier Dubai | Get a Quote',
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Contact HVAC experts in UAE for Daikin solutions. Get quick support, product details, and professional guidance for your cooling and ventilation needs.',
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'HVAC contact UAE, HVAC supplier Dubai, Daikin dealer UAE, HVAC quote UAE, air conditioning supplier UAE',
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Contact HVAC Experts UAE | HVAC Supplier Dubai | Get a Quote',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Contact HVAC experts in UAE for Daikin solutions. Get quick support, product details, and professional guidance for your cooling and ventilation needs.',
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      (window as any).dataLayer.push({
        event: 'form_error',
        form_name: 'contact_page_form',
      });

      this.contactForm.markAllAsTouched();
      return;
    }

    const formValues = this.contactForm.value;

    const message = `New Quote Request:
Full Name: ${formValues.fullName}
Phone: ${formValues.phone}
Email: ${formValues.email}
Company: ${formValues.company}

Product Type: ${formValues.productType}
Product Name: ${formValues.productName}`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappNumber = '971523124576';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    this.showPopup = true;

    (window as any).dataLayer.push({
      event: 'form_success',
      form_name: 'contact_page_form',
    });

    this.contactForm.reset();
  }

  openMap() {
    const mapUrl = 'https://share.google/wiHKuxZiVfYb826jz';
    window.open(mapUrl, '_blank');
  }
}
