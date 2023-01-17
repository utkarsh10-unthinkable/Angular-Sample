import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../Public-compnents/home/home.component';
import { AllBooksComponent } from './component/all-books/all-books.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { BookComponent } from './Book.component';
import { PublicRoutingModule } from './Book-routing.module';



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class BookModule { }
