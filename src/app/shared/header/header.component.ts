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
  dropdownOpen = false;
  categories: any[] = [];

  constructor() {
    const grouped: { [category: string]: { [subCat: string]: any[] } } = {};

    // Group products by category → subcategory
    Products.forEach(p => {
      if (!grouped[p.category]) grouped[p.category] = {};
      if (p.subCat) {
        if (!grouped[p.category][p.subCat]) grouped[p.category][p.subCat] = [];
        grouped[p.category][p.subCat].push(p);
      } else {
        // Direct items without subCat
        if (!grouped[p.category]['_direct']) grouped[p.category]['_direct'] = [];
        grouped[p.category]['_direct'].push(p);
      }
    });

    // Convert structure into menu hierarchy
    this.categories = Object.keys(grouped).map(category => ({
      name: category,
      open: false,
      items: Object.keys(grouped[category])
        .filter(subCat => subCat !== '_direct')
        .map(subCat => ({
          name: subCat,
          open: false,
          items: grouped[category][subCat]
        })),
      directItems: grouped[category]['_direct'] || []
    }));
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.dropdownOpen = !this.dropdownOpen;
  }

  openCategory(cat: any) {
    if (window.innerWidth >= 992) cat.open = true;
  }

  toggleCategory(event: Event, cat: any) {
    event.preventDefault();
    if (window.innerWidth < 992) cat.open = !cat.open;
  }

  closeNavbar() {
    const navbar = document.getElementById('mainNavbar');
    if (navbar && navbar.classList.contains('show')) navbar.classList.remove('show');
  }
}
