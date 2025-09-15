import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Products } from '../../data/products';
import { BannerComponent } from "../../shared/banner/banner.component";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [CommonModule, BannerComponent, FormsModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = Products;
  filteredProducts = Products;

  searchText: string = '';
  selectedCategory: string = '';

  categories: string[] = [
    'AC Equipments',
    'Air Distribution',
    'Ventilation',
    'Controls'
  ];

  applyFilters() {
    this.filteredProducts = this.products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesCategory = this.selectedCategory
        ? p.category === this.selectedCategory
        : true;

      return matchesSearch && matchesCategory;
    });
  }
}
