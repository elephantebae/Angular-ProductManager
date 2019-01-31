import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component'
import { CreateComponent } from './create/create.component'
import { HomeComponent } from './home/home.component'
import { EditComponent } from './edit/edit.component'
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'products', component: ProductComponent, children: [
      { path: 'edit/:id', component: EditComponent }
    ]
  },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
