import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit {
  product!: Product[];
  subscription!: Subscription
  
  constructor(private productService: ProductService) {}
  ngOnInit() {
   this.subscription = this.productService.getProduct().subscribe({
      next: (res) => {
        this.product = res ?? [];
      },
      error: (err) => console.log(err),
    });
  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
