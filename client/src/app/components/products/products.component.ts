import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(result => {
      this.products = result.products;
    });
  }



}
