import { CartService } from 'src/app/shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  fullName!: string | null
  totalPrice!: number | null

constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.fullName = params.get('fullName');
      this.totalPrice = Number(params.get('totalPrice'));
    });
  }
}
