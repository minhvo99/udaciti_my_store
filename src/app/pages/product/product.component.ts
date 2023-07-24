import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  constructor(private cart: CartService) {}
  productCount!: SelectItem[]
  productQuantity!: number

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
  addToCart(item: Product, productQuantity: number) {
    this.productQuantity = productQuantity
    this.cart.add(item, this.productQuantity)
    alert(`New Item  ${item.name} added to cart!`)
    window.location.reload();
  }

}
