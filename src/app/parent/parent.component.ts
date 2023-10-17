import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  Name: string = '';
  message: string = ''; 
  sendToChild: string | undefined; 

  submit() {
    this.sendToChild = this.Name;
  }

  getResponse($event: string) { 
    this.message = $event;
  }
}
