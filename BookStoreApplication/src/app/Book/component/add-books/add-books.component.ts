import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {

  constructor(private _bookService:BookService)  {

  }
  public saveBook(value:any):void{
    console.log(value);
    console.log(value.Title)
    var book:BookModel=new BookModel();
    book.title=value.Title,
    book.author=value.Author,
    book.totalPages=value.Page,
    book.price=value.Price,
    this._bookService.addBook(book);
    console.log(this._bookService.getBooks())
  }
  

}
