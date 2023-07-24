import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public title = 'MyStore';
  quantity: string | number = '0';
  public cartItems!: Product[]
  constructor(private cart: CartService) {}
  ngOnInit(): void {
    const cartData = localStorage.getItem("cart");
    this.cartItems = cartData !== null ? JSON.parse(cartData) : null; 
    this.quantity  = this.cartItems.reduce((c, t1) => t1.amount + c, 0)
  }
  
}
