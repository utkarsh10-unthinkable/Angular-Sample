import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn:"root"
    }
)
export class Counter2Service {
  public counter:number=0;

  constructor() { }
  public increase():void{
    this.counter+=2;
  }
  public decrease():void{
    this.counter-=2;
  }
}
