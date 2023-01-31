import { PriceModel } from "./price.model";

export class BookModel{

    public id:number;
    public title:string;
    public totalPages:number;
    public author:string;
    public price:PriceModel
    public Ispublished:boolean

    // public set author(value:string)
    // {
    //     this._author='author'+value;
    // }
    // public get author(){
    //     return this._author
    // }
  }

   