import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Products } from '../../data/products';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  dropdownOpen = false;
  categories: any[] = [];

  constructor(private router: Router) {
    const grouped: { [category: string]: { [subCat: string]: any[] } } = {};

    Products.forEach(p => {
      if (!grouped[p.category]) grouped[p.category] = {};
      if (p.subCat) {
        if (!grouped[p.category][p.subCat]) grouped[p.category][p.subCat] = [];
        grouped[p.category][p.subCat].push(p);
      } else {
        if (!grouped[p.category]['_direct']) grouped[p.category]['_direct'] = [];
        grouped[p.category]['_direct'].push(p);
      }
    });

    const PRIORITY_ORDER = ['VRV', 'DX'];
const CATEGORY_PRIORITY = [
  'AC EQUIPMENTS',
  'AIR DISTRIBUTION',
  'VENTILATION'
];

    this.categories = Object.keys(grouped)
  .sort((a, b) => {
    const aIndex = CATEGORY_PRIORITY.indexOf(a);
    const bIndex = CATEGORY_PRIORITY.indexOf(b);

    // Both categories are in priority list
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }

    // Only A is in priority list
    if (aIndex !== -1) return -1;

    // Only B is in priority list
    if (bIndex !== -1) return 1;

    // Neither in priority → alphabetical
    return a.localeCompare(b);
  })
  .map(category => ({
    name: category,
    open: false,
    items: Object.keys(grouped[category])
      .filter(subCat => subCat !== '_direct')
      .sort((a, b) => {
        const PRIORITY_ORDER = ['VRV', 'DX'];
        const aIndex = PRIORITY_ORDER.indexOf(a);
        const bIndex = PRIORITY_ORDER.indexOf(b);

        if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
      })
      .map(subCat => ({
        name: subCat,
        open: false,
        items: grouped[category][subCat]
      })),
    directItems: grouped[category]['_direct'] || []
  }));

  }
onProductsHover(state: boolean) {
  if (window.innerWidth >= 992) {
    this.dropdownOpen = state;
  }
}

onProductsClick(event: Event) {
  if (window.innerWidth < 992) {
    event.preventDefault();
    this.dropdownOpen = !this.dropdownOpen;
  }
}

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.dropdownOpen = !this.dropdownOpen;
  }

  openCategory(cat: any, event?: MouseEvent) {
    if (window.innerWidth >= 992) {
      cat.open = true;
      
      // Check position after DOM updates
      setTimeout(() => {
        if (event) {
          this.checkDropdownPosition(event);
        }
      }, 0);
    }
  }

  checkDropdownPosition(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    if (!target) return;

    const parentLi = target.closest('.parent');
    if (!parentLi) return;

    const childMenu = parentLi.querySelector('.child') as HTMLElement;
    if (!childMenu) return;

    // Get bounding rectangles
    const rect = childMenu.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    // If dropdown would overflow right edge (with 20px buffer), flip it to the left
    if (rect.right > viewportWidth - 20) {
      childMenu.classList.add('flip-left');
    } else {
      childMenu.classList.remove('flip-left');
    }
  }

  toggleCategory(event: Event, cat: any) {
    event.preventDefault();
    if (window.innerWidth < 992) cat.open = !cat.open;
  }

  // Add navigation method for products
  navigateToProduct(event: Event, product: any) {
    event.preventDefault();
    this.closeNavbar();
    
    if (product.hasDetails === false || product.route === 'contactusdefault') {
      // Navigate to contact default page
      this.router.navigate(['/contact-default'], { 
        queryParams: { product: product.name } 
      });
    } else {
      // Navigate to product details page
      this.router.navigate(['/products', product.route]);
    }
  }

  closeNavbar() {
    const navbar = document.getElementById('mainNavbar');
    if (navbar && navbar.classList.contains('show')) navbar.classList.remove('show');
    this.dropdownOpen = false;
    
    // Clear all flip-left classes
    document.querySelectorAll('.child.flip-left').forEach(el => {
      el.classList.remove('flip-left');
    });
  }
}