import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../Public-compnents/home/home.component';
import { AllBooksComponent } from './component/all-books/all-books.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { BookComponent } from './Book.component';
import { PublicRoutingModule } from './Book-routing.module';
import { BookService } from './services/book.service';
import {MatCardModule} from '@angular/material/card';
import { RecentBooksComponent } from './component/recent-books/recent-books.component';
import { BookCardComponent } from './component/book-card/book-card.component';
import { AddBooksComponent } from './component/add-books/add-books.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    BookComponent,
    RecentBooksComponent,
    BookCardComponent,
    AddBooksComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule, 
    MatCardModule,
    FormsModule
  ],
 
})
export class BookModule { }
