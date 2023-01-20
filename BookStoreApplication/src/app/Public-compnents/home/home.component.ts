import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';
import { Counter2Service } from 'src/app/shared/services/counter2.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(public counter:CounterService){  }
  ngOnInit():void{}
  public incCount():void{
    this.counter.increase();
  }
  public decCount():void{
    this.counter.decrease();
  }
}
