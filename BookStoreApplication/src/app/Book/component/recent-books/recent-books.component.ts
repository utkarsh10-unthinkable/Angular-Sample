import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.css']
})
export class RecentBooksComponent implements OnInit{

  public recentbooks:BookModel[]=[];
  constructor(public recentbookservice:BookService){
    this.recentbooks;
  }
  ngOnInit(): void {
    this.getrecentBooks();
  }
  public getrecentBooks():void{
   // this.recentbooks=this.recentbookservice.recentBooks()
  }
  
}
