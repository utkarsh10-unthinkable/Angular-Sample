import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  public counter:number=0;

  constructor() { }
  public increase():void{
    this.counter++;
  }
  public decrease():void{
    this.counter--;
  }
}
