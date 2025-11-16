import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Products } from '../../data/products';
import { BannerComponent } from "../../shared/banner/banner.component";
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [CommonModule, BannerComponent, FormsModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  products = Products;
  filteredProducts = Products;

  searchText: string = '';
  selectedCategory: string = '';

  categories: string[] = [
    'AC EQUIPMENTS',
    'AIR DISTRIBUTION',
    'VENTILATION',
    'CONTROLS'
  ];

  category: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedCategory = navigation.extras?.state['category'];
    }
  }

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesCategory = this.selectedCategory
        ? p.category === this.selectedCategory
        : true;

      return matchesSearch && matchesCategory;
    });
    this.filteredProducts = [...this.filteredProducts];
  }

  // Add this method to handle product navigation
navigateToProduct(product: any) {
  console.log('Navigating to product:', product);
  
  if (product.hasDetails === false || product.route === 'contactusdefault') {
    // Navigate to ROOT level (not inside /products/)
    this.router.navigate(['/contact-default'], { 
      queryParams: { product: product.name } 
    });
  } else {
    // Navigate to product details page
    this.router.navigate(['/products', product.route]);
  }
}
}