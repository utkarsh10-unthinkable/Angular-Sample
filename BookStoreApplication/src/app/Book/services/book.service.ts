import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn:'root'
}

)
export class BookService {

  private allBooks=[
      {
        "id":1,
        "title":"Angular Fundamental",
        "totalPages":435,
        "author":"Ram Singh",
        "price":{
          "currency":"INR",
          "value":199
        }
      },
      {
        "id":2,
        "title":"Java Fundamental",
        "totalPages":4135,
        "author":"Kisan Singh",
        "price":{
          "currency":"USD",
          "value":99
        }
      },
      {
        "id":3,
        "title":"Python Fundamental",
        "totalPages":135,
        "author":"Ayush Singh",
        "price":{
          "currency":"INR",
          "value":99
        }
      },
      {
        "id":4,
        "title":"Ruby Fundamental",
        "totalPages":135,
        "author":"Ayush Singh",
        "price":{
          "currency":"INR",
          "value":99
        }
      },
      {
        "id":3,
        "title":"Dev Fundamental",
        "totalPages":135,
        "author":"Ayush Singh",
        "price":{
          "currency":"INR",
          "value":99
        }
      },
      {
        "id":3,
        "title":"Python Fundamental",
        "totalPages":135,
        "author":"Ayush Singh",
        "price":{
          "currency":"INR",
          "value":99
        }
      }

      
    ];
  
  constructor(){}
  public addBook(bookModel:BookModel):void{
    console.log("hello"+bookModel.title)
    this.allBooks.push(bookModel);
    console.log(this.allBooks[6]);
    console.log(this.allBooks.length);

  }
  public getBooks():any[]{
    return this.allBooks;
  }
  public recentBooks():any[]{
    return [
      {
        "id":1,
        "title":"Angular Fundamental",
        "totalPages":435,
        "author":"Ram Singh",
        "price":{
          "currency":"INR",
          "value":199
        }
      },
      {
        "id":2,
        "title":"Java Fundamental",
        "totalPages":4135,
        "author":"Kisan Singh",
        "price":{
          "currency":"USD",
          "value":99
        }
      },
      {
        "id":3,
        "title":"Python Fundamental",
        "totalPages":135,
        "author":"Ayush Singh",
        "price":{
          "currency":"INR",
          "value":99
        }
      },
    ]
  }
}

