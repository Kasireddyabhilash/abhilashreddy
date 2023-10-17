import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent { 
  clients = [
    { name: 'John', lastName: 'Doe', id: '1' },
    { name: 'Jane', lastName: 'Smith', id: '2' },
  ];
}
