import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService  implements OnInit{
    counter = 1;
    count: BehaviorSubject<number>;
    constructor() {
 
        this.count = new BehaviorSubject(this.counter);
    }
  ngOnInit(): void {
  }
 
    nextCount() {
        this.count.next(++this.counter);
    }
}
