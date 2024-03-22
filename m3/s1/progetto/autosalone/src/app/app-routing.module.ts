import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AudiComponent } from './components/audi/audi.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { FordComponent } from './components/ford/ford.component';
const routes: Routes = [

{path:"",component:HomeComponent},{path:"audi",component:AudiComponent},{path:"fiat",component:FiatComponent},{path:"ford",component:FordComponent}











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
