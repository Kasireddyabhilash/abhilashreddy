import { Component } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
    count: number | undefined;
    constructor(private countservice: CountService) {
    }
    ngOnInit() {
 
        this.countservice.count.subscribe(data=> {
            this.count = data;
        });
    }
    nextCount() {
        this.countservice.nextCount();
    }
}