import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Products } from '../../data/products';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false;
  dropdownOpen = false;
  categories: any[] = [];

  constructor() {
    const grouped: { [key: string]: any[] } = {};
    Products.forEach(p => {
      if (!grouped[p.category]) grouped[p.category] = [];
      grouped[p.category].push(p);
    });

    this.categories = Object.keys(grouped).map(key => ({
      name: key,
      items: grouped[key],
      open: false 
    }));
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.dropdownOpen = !this.dropdownOpen;
  }

  openCategory(cat: any) {
    if (window.innerWidth >= 992) {
      cat.open = true;
    }
  }

  toggleCategory(event: Event, cat: any) {
    event.preventDefault();
    if (window.innerWidth < 992) {
      cat.open = !cat.open;
    }
  }

  closeNavbar() {
    const navbar = document.getElementById('mainNavbar');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
}
