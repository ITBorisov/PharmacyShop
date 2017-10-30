import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product = {
    name: '',
    category: '',
    animals: '',
    price: '',
  };

  constructor(private productService: ProductsService) { }

  ngOnInit() {
  }

  productFormSubmit() {
    this.productService.addProduct(this.product).subscribe(result => {
      if (!result.success) {
        console.log('Proval');
      }else {
        console.log(result.success);
      }
    });
  }

}
