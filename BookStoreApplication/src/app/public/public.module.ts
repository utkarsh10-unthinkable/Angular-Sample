import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { AllBooksComponent } from './component/all-books/all-books.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    AllBooksComponent,
    BookDetailsComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
