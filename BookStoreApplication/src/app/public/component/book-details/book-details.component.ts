import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public Id:number=0;
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.route)
    this.route.params.subscribe((param)=>{
      this.Id=param['id']
     
    })
  }


}
