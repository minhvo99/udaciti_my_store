import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  constructor(private router: Router) {}
  productCount!: SelectItem[]
  productQuantity!: string

  @Input() item!: Product;
  ngOnInit(): void {
    this.productCount = [ 
      {label: '1', value: 1},
      {label: '2', value: 2},
      {label: '3', value: 3},
      {label: '4', value: 4},
      {label: '5', value: 5},
    ]
  }
  addToCart(item: Product) {
    this.productQuantity = this.productCount.find(x => x.value === item.amount)?.label ?? '1'
    console.log(item)
    console.log(this.productQuantity)
    
  }
  navigateToProductDetail(item: Product) {
    this.router.navigate(['/'], { queryParams: { id: item.id } });
    console.log(item);
    
  } 
}
