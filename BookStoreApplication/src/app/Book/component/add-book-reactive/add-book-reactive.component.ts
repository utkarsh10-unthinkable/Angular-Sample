import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.css']
})
export class AddBookReactiveComponent implements OnInit {

  public addBookForm:FormGroup;
  constructor(private _bookService:BookService){
    this.addBookForm=new FormGroup({
      Title:new FormControl('Utkarsh',[Validators.required,Validators.minLength(3)]),
      Author:new FormControl(null,Validators.required),
      price:new FormGroup({
        currency:new FormControl(),
        value:new FormControl()
      }),
      Page:new FormControl(),
      Ispublished:new FormControl(),
      
    })
        
  }
  ngOnInit(): void {}
  updateFormValue():void{
    this.addBookForm.patchValue({
      Title:'Goyal',
      Author:'Pradeep',
      value:200
    })
  }
  saveBook():void{
    console.log(this.addBookForm.value)
    this._bookService.addBook(this.addBookForm.value).subscribe(x=>{
      console.log(x)
    })
    console.log(this._bookService.getBooks())

  }
 
}
