import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { IProduct } from './product-list/iproduct';

@Injectable()
export class ProductService {
    // get API Path
    private _productUrl: string = './assets/json/product.json';
    constructor(private http: HttpClient) {
    }
    getProduct (): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(this._productUrl);
    }

    getProducts(id: number): Observable<IProduct> {
      return this.getProduct()
        .map((products: IProduct[]) => products.find(p => p.productId === id));
    }
}
