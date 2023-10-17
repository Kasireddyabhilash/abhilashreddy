import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() Name:any;
@Output() getResponse = new EventEmitter;
ngOnInit(): void {
}
onClick(){
this.getResponse.emit('message from child')
}
}
