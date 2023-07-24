import { Product } from './../../models/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cartItemsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();


  constructor() {
    const cartData = localStorage.getItem("cart");
    const cartItems = cartData !== null ? JSON.parse(cartData) : null;
    this.cartItemsSubject.next(cartItems);
  }

  private updateCartItemsInStorage(cartItems: Product[]): void {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    this.cartItemsSubject.next(cartItems);
  }

  public add(product: Product, quantity: number): void {
    const cartItems = this.cartItemsSubject.getValue() || [];
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem && quantity) {
      existingItem.amount = quantity;
    } else if (!existingItem && quantity) {
      product.amount = quantity;
      cartItems.push(product);
    }

    this.updateCartItemsInStorage(cartItems);
  }
}
