import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product-list/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Filter List';
  filteredProducts: IProduct[];
  products: IProduct[] = [];
  imageWidth: number = 40;
  imageMargin: number = 2;

  // filter string
  _listFilter: string;

  // Hide and show images
  showImage: boolean = false;

  constructor(private _ProductService: ProductService) {
    this.listFilter = '';
  }

  // Show or hide image
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // products list
  ngOnInit(): void {
    this._ProductService.getProduct()
    .subscribe(products => {
        this.products = products;
        this.filteredProducts = this.products;
    });
  }

  // filter
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}

