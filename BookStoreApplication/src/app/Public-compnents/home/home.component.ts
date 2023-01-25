import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuthorComponent } from 'src/app/shared/component/author/author.component';
import { CounterService } from 'src/app/shared/services/counter.service';
import { Counter2Service } from 'src/app/shared/services/counter2.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit{
  @ViewChild(AuthorComponent)private childAuthor:AuthorComponent;

  constructor(public counter:CounterService){  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.childAuthor.setData(10)
    }, 0);
  }
  ngOnInit():void{}
  public incCount():void{
    this.counter.increase();
  }
  public decCount():void{
    this.counter.decrease();
  }
  public childData($event:any):void{
    console.log($event)
  }
}


