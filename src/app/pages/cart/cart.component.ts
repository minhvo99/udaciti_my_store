import { Component, NgZone, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public formGroup!: FormGroup;
  public formInputAmount!: FormGroup;
  private count: number = 0
  public cartItems!: Product[]
  totalPrice: number | string = '';
  constructor(private formBuilder: FormBuilder, private cart: CartService, private  router: Router) {}
  ngOnInit(): void {
   this.createForm();
   this.getCartItems();
   this.calculateTotal();
    
  }
  getCartItems(){
    const cartData = localStorage.getItem("cart");
   this.cartItems = cartData !== null ? JSON.parse(cartData) : null; 
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      fullName: ['', Validators.compose(
        [Validators.required, Validators.minLength(3)]
      )],
      address: ['', Validators.compose(
        [Validators.required, Validators.minLength(6)]
      )],
      creditCard: ['', Validators.required],
    });  
    //
  }
  onSubmitForm(event: Event) {
    if(this.formGroup.status === "INVALID"){
      event.preventDefault()
    }
    const data =this.formGroup.value
    this.router.navigate([`/check-out/${data.fullName}/${this.totalPrice}`])
        
  }
  selectchange(value: number, product: Product){
    const index = this.cartItems.indexOf(product)
    this.cartItems[index] = product;
    this.cartItems[index].amount = value;
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    window.location.reload()
  }
  calculateTotal() {
    this.totalPrice = this.cartItems.reduce((acc, item) => {
      this.totalPrice = parseFloat(
        (acc + item.price * Number(item.amount)).toFixed(2)
      );
      return this.totalPrice;
    }, 0);
  }
  removeItem(id: number){
    const products = this.cartItems.filter(
      (product: Product) => product.id !== id
    );
    if(products){
      localStorage.removeItem("cart");
    }
    localStorage.setItem('cart', JSON.stringify(products));
    this.calculateTotal()
    window.location.reload()
  }

}
