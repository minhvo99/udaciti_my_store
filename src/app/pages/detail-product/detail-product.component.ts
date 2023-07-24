import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent  implements OnInit{
  productCount!: SelectItem[]
  productQuantity!: string

  ngOnInit() {
    this.productCount = [
      {label: '1', value: 1},
      {label: '2', value: 2},
      {label: '3', value: 3},
      {label: '4', value: 4},
      {label: '5', value: 5},
    ];
  }
}
