import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { GuestGuard } from './auth/guest.guard';



const routes: Routes = [


{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)  ,  canActivate:[GuestGuard]
},


{ path: '', loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)  ,   canActivate:[GuestGuard]
},


{ path: 'movies-list', loadChildren: () => import('./components/movies-list/movies-list.module').then(m => m.MoviesListModule),canActivate:[AuthGuard] },


{ path: 'users', loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
