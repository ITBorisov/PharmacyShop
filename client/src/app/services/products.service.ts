import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class ProductsService {
  url = this.authService.url;
  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  getAllProducts() {
    return this.http.get(this.url + '/admin/product').map((response: Response) => response.json());
  }

  addProduct(product) {
    this.authService.loadToken();
    const headers = new Headers({'Content-Type': 'application/json', 'authorization': this.authService.authToken});
    return this.http.post(this.url + '/admin/product', product, {headers: headers}).map((response: Response) => response.json());
  }

}
