import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "list-products",
    loadChildren: ()=> import("./shared/layouts/layout.module").then(m => m.LayoutModule)
  },
  {
    path: "",
    pathMatch:"full",
    redirectTo:"list-products"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
