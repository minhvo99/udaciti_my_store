import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  storage = window.localStorage;

  constructor() { }
  getCart() {
    const cart = this.storage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  clearCarrt() {
    this.storage.removeItem('cart');
  }
}
