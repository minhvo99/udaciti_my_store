import { CheckoutComponent } from './../../pages/checkout/checkout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ListProductComponent } from 'src/app/pages/list-product/list-product.component';
import { DetailProductComponent } from 'src/app/pages/detail-product/detail-product.component';
import { CartComponent } from 'src/app/pages/cart/cart.component';


const route: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
            path:"",
            component: ListProductComponent
            },
            {
                path:"list-products/:id",
                component: DetailProductComponent
            },
            {
                path:"cart",
                component: CartComponent
            },
            {
                path:"check-out/:fullName/:totalPrice",
                component: CheckoutComponent
            }
    ]
    }
]
const declarations = [
    HeaderComponent,
    LayoutComponent
]
const imports = []

@NgModule({
    imports:[RouterModule.forChild(route)],
    declarations:[...declarations],
    exports:[...declarations, RouterModule]
})

export class LayoutModule{}