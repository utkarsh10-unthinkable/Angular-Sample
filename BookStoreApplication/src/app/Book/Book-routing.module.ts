import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './Book.component';
import { AllBooksComponent } from './component/all-books/all-books.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { HomeComponent } from '../Public-compnents/home/home.component';

const routes: Routes = [
  { path: 'yup', component: AllBooksComponent },
  { path: 'book-details/:id', component: BookDetailsComponent }
 
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
