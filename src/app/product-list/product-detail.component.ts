// import { Component, OnInit } from '@angular/core';

// import { IProduct } from './iproduct';
// import { ProductService } from '../product.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product-list/iproduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) {
  }

  getProducts(id: number) {
    this._productService.getProducts(id).subscribe(
      product => this.product = product
    );
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProducts(id);
    }
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
