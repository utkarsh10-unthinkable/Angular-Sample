import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';
import { Counter2Service } from 'src/app/shared/services/counter2.service';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
  providers:[BookService]
 
})
export class AllBooksComponent implements OnInit {
  public books:BookModel[]=[]
  public book: BookModel;
  constructor(public bookService:BookService,public counter:Counter2Service)
  {
    // var bookService=new BookService();
    // this.books=bookService.getBooks();
    
  }
  // ngOnInit():void{
  //   this.books=this.bookService.getBooks();
  //   console.log(this.books)
  // }
  ngOnInit():void{
    // const allBoooks=this.bookService.getBooks()
     this.getAllBooks();
    // allBoooks.forEach(b=>{
    //   var obj=new BookModel();
    //   obj.id=b.id,
    //   obj.author=b.author,
    //   obj.totalPages=b.totalPages,
    //   obj.price=b.price,
    //   obj.title=b.title
    //   this.books.push(obj);
    // })
    //console.log(this.books)
  }

  public incCount():void{
    this.counter.increase();
  }
  public decCount():void{
    this.counter.decrease();
  }
  private getAllBooks():void{
    //this.getBook();
    this.bookService.getBooks().subscribe(x=>{
      this.books=x;
      console.log(this.books)
    })
  }

  private getBook():void{
    this.bookService.getBooksByID(2).subscribe(x=>{
      this.book = x;
      console.log(this.book)
    })
  }

}
