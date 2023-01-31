import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './Book.component';
import { AllBooksComponent } from './component/all-books/all-books.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { HomeComponent } from '../Public-compnents/home/home.component';
import { RecentBooksComponent } from './component/recent-books/recent-books.component';
import { AddBooksComponent } from './component/add-books/add-books.component';
import { AddBookReactiveComponent } from './component/add-book-reactive/add-book-reactive.component';

const routes: Routes = [
  { path: '', component: AllBooksComponent },
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: 'recent-book', component: RecentBooksComponent },
  {path:'add-book',component:AddBooksComponent},
  {path:'rec-book',component:AddBookReactiveComponent}


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

