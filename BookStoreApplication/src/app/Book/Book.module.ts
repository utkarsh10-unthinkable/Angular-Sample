import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './component/all-books/all-books.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { BookComponent } from './Book.component';
import { PublicRoutingModule } from './Book-routing.module';
import {MatCardModule} from '@angular/material/card';
import { RecentBooksComponent } from './component/recent-books/recent-books.component';
import { BookCardComponent } from './component/book-card/book-card.component';
import { AddBooksComponent } from './component/add-books/add-books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FilterPipe } from './Pipes/filter.pipe';
import { AddBookReactiveComponent } from './component/add-book-reactive/add-book-reactive.component';




@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    BookComponent,
    RecentBooksComponent,
    BookCardComponent,
    AddBooksComponent,
    FilterPipe,
    AddBookReactiveComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule, 
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
 
})
export class BookModule { }
