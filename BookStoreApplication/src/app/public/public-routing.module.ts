import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './component/all-books/all-books.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path:'public',
    component:PublicComponent,
    children:[
       {path:'all-books',component:AllBooksComponent},
       {path:'book-details/:id',component:BookDetailsComponent},
       {path:'home',component:HomeComponent}

    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
