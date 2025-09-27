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
    'AC Equipments',
    'Air Distribution',
    'Ventilation',
    'Controls'
  ];

  category: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedCategory = navigation.extras?.state['category'];
    }
  }

  ngOnInit(): void {
    console.log(this.category);
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
  }
}
