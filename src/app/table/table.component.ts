import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  comments:any;

  constructor(private api: UsersService) {}

  ngOnInit(): void {
    this.api.getComments().subscribe((data) => {
      this.comments = data;
    });
  }
}
