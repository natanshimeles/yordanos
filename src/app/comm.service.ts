import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  currentNo : number = 1;
  nextNo :BehaviorSubject<number> =  new BehaviorSubject(this.currentNo);



  nextValue(){
    this.nextNo.next(++this.currentNo)
  }

  constructor() { }
}
