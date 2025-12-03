import { Component,OnInit } from '@angular/core';
import { BannerComponent } from "../../shared/banner/banner.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule,Router  } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [BannerComponent, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  showPopup: boolean = false;

  constructor(private fb: FormBuilder,private router: Router,private title: Title) {
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

      this.showPopup = true;

      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  goTo(path: string) {
  this.showPopup = false;     // hide popup
  this.router.navigate([path]); // navigate to home
}

  openMap() {
    const mapUrl = 'https://share.google/wiHKuxZiVfYb826jz';
    window.open(mapUrl, '_blank');
  }

}
