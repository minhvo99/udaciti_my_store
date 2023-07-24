import { ProductService } from './../../shared/services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent  implements OnInit{
  id!: number
  productCount!: SelectItem[]
  productQuantity!: number
  products!: Product[];
  product: Product | null = null;
  subscription!: Subscription
  
  constructor(private productService: ProductService, private route: ActivatedRoute, private cart: CartService) {}

  ngOnInit() {
    this.productCount = [
      {label: '1', value: 1},
      {label: '2', value: 2},
      {label: '3', value: 3},
      {label: '4', value: 4},
      {label: '5', value: 5},
      {label: '6', value: 6},
      {label: '7', value: 7},
      {label: '8', value: 8},
      {label: '9', value: 9},
      {label: '10', value: 10},
    ];
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })
   this.subscription = this.productService.getProduct().subscribe({
      next: (res) => {
        this.products = res ?? [];
        this.product = this.getProductByID(this.id)
      },
      error: (err) => console.log(err),
    });
  }
  getProductByID(id: number): Product {
    return this.products.filter(p => p.id === id)[0]
  }
  addToCart(product: Product, productQuantity: number){
    this.productQuantity = productQuantity
    this.cart.add(product, this.productQuantity)
    alert(`New Item ${product.name} added to cart!`)
    window.location.reload();
  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
