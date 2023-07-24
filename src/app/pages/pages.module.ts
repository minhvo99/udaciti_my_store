import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { UserInfoComponent } from './cart/user-info/user-info.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ListProductComponent } from './list-product/list-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { IntegerValidationDirective } from './integer-validation.directive';
const declarations = [
  CartComponent,
  UserInfoComponent,
  CheckoutComponent,
  ListProductComponent,
  DetailProductComponent,
  ProductComponent,
  IntegerValidationDirective
];
const imports = [
  CardModule,
  ButtonModule,
  DropdownModule,
  FormsModule,
  BrowserModule,
  RouterModule,
  InputTextModule,
  InputNumberModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...declarations],
})
export class PagesModule {}
