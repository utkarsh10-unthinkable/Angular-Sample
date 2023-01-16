import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './public/component/home/home.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'public/home', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule)
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
