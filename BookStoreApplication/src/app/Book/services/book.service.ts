import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn:'root'
})
export class BookService {
  constructor(private _httpclient:HttpClient){}
  public addBook(bookModel:BookModel):Observable<BookModel>{
    return this._httpclient.post<BookModel>('https://localhost:7231/api/books',bookModel)
  }
  public getBooks():Observable<BookModel[]>{
    
    return this._httpclient.get<BookModel[]>('https://localhost:7231/api/books')
    
 
  }
  public getBooksByID(value:number):Observable<BookModel>{
    console.log("get by id"+this._httpclient.get<BookModel>('https://localhost:7231/api/books/'+value))
    return this._httpclient.get<BookModel>('https://localhost:7231/api/books/'+value)
 
  }
}