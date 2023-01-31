import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  value:string='';

  @Input('allbooks')books:BookModel[]
  constructor(){}
  ngOnInit(): void {
    
  }
}
