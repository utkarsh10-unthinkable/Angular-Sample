import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
//  @Input()
//  data:number;
 //using getter setter to @input
 @Input()
 get data()
 {
  return this._data;
 }
 set data(value:number)
 {
  this._data=value+1
 }
 private _data:number
 
 public dat:number

 @Input()
 showAuthor:boolean;
 public setData(value:number):void{
  this.dat=value
 }
 //@output from child to parent
 @Output() myData=new EventEmitter<string>();
public btnclick():void{

  this.myData.emit("this text is from child")
}
constructor(){}
ngOnInit(): void {
  
}
}
