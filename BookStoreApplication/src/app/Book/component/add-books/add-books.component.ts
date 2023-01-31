import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books1.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  public model:BookModel;
  constructor(private _bookService:BookService)  {

  }
  ngOnInit(): void {
    this.model=new BookModel();
    this.model.title='Book'
    this.model.Ispublished=true
    

  }
  public saveBook(value:any):void{
     console.log(value);
    // console.log(value.Title)
    // var book:BookModel=new BookModel();
    // book.title=value.Title,
    // book.author=value.Author,
    // book.totalPages=value.Page,
    // book.price=value.Price,
    // book.Ispublished=value.Ispublished

    this._bookService.addBook(this.model);
    console.log(this._bookService.getBooks())
  }
  

}
