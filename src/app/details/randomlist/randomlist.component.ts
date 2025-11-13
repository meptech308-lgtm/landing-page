import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Products } from '../../data/products';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-randomlist',
  imports: [CommonModule, RouterModule],
  templateUrl: './randomlist.component.html',
  styleUrl: './randomlist.component.css'
})
export class RandomlistComponent implements OnInit {
  products = Products;
  randomProducts: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.getRandomProducts();
  }

  getRandomProducts() {
    const shuffled = [...this.products].sort(() => 0.5 - Math.random());
    this.randomProducts = shuffled.slice(0, 4);
  }

  goToListPage() {
    this.router.navigate(['/products']);
  }
}
