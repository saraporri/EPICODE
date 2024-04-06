import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) }, { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, { path: 'homepage', loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
