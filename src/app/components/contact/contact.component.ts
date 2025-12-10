import { Component,OnInit } from '@angular/core';
import { BannerComponent } from "../../shared/banner/banner.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [BannerComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  showPopup: boolean = false;

  constructor(private fb: FormBuilder,private title: Title) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      enquiry: ['', Validators.required],
      details: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
  this.title.setTitle('Contact | MEPTECH Air-condition Trading LLC');
  }


  onSubmit() {

  if (this.contactForm.invalid) {

    (window as any).dataLayer.push({
      event: 'form_error',
      form_name: 'contact_page_form'
    });

    this.contactForm.markAllAsTouched();
    return;
  }

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

  this.showPopup = true;
  setTimeout(() => {
    this.showPopup = false;
  }, 3000);

  (window as any).dataLayer.push({
    event: 'form_success',
    form_name: 'contact_page_form'
  });

  this.contactForm.reset();
  this.contactForm.markAsPristine();
  (this.contactForm as any).markAsUntouched?.();
}


  openMap() {
    const mapUrl = 'https://share.google/wiHKuxZiVfYb826jz';
    window.open(mapUrl, '_blank');
  }

}
