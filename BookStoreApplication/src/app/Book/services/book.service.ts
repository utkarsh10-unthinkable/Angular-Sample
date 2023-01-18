import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable()
export class BookService {

  constructor() { }
  public getBooks():BookModel[]{
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
      }
    ]
  }
}

