import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { GuestGuard } from './auth/guest.guard';



const routes: Routes = [


{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },


{ path: '', loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule) },


{ path: 'movies-list', loadChildren: () => import('./components/movies-list/movies-list.module').then(m => m.MoviesListModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
