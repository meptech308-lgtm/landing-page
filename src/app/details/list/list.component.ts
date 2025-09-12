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

  categoryMap: { [key: number]: string } = {
    1: 'AC Equipments',
    2: 'AC Equipments',
    3: 'AC Equipments',
    4: 'AC Equipments',
    5: 'AC Equipments',
    6: 'AC Equipments',
    7: 'AC Equipments',
    8: 'Air Distribution',
    9: 'Air Distribution',
    10: 'Ventilation',
    11: 'Ventilation',
    12: 'Air Distribution',
    13: 'Air Distribution',
    14: 'Controls',
    15: 'Ventilation',
    16: 'Controls',
    17: 'Air Distribution',
    18: 'Ventilation',
    19: 'Ventilation',
    20: 'Ventilation',
    21: 'Controls',
    22: 'Controls'
  };

  applyFilters() {
    this.filteredProducts = this.products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesCategory = this.selectedCategory
        ? this.categoryMap[p.id] === this.selectedCategory
        : true;

      return matchesSearch && matchesCategory;
    });
  }
}
