import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductService, Prouct } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export class ProductsComponent implements OnInit {
  products: Prouct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.products; 
    });
  }
}
