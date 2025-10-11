import { Component } from '@angular/core';
import { BannerComponent } from "../../shared/banner/banner.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [BannerComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      enquiry: ['', Validators.required],
      details: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;

      const message = `New Quote Request:
Full Name: ${formValues.fullName}
Phone: ${formValues.phone}
Email: ${formValues.email}
Enquiry Type: ${formValues.enquiry}
Project Details: ${formValues.details}`;

      const encodedMessage = encodeURIComponent(message);

      const whatsappNumber = '971523124576';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');

      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  openMap() {
    const mapUrl = 'https://maps.app.goo.gl/2wPdFbUEN1iMPjxX6';
    window.open(mapUrl, '_blank');
  }

}
