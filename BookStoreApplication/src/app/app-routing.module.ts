import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Public-compnents/about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
import { BookComponent } from './Book/Book.component';
import { HomeComponent } from './Public-compnents/home/home.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'Book/all-books', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule)
  },
  {
    path: 'Book',
    component: BookComponent,
    loadChildren: () => import('./Book/Book.module').then((x) => x.BookModule)
  },
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () => import('./user/user.module').then((x) => x.UserModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 