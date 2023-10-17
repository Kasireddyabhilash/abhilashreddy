import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { IRandomUsers } from './grid/grid.component';

@Injectable({
  providedIn: 'root'
})
export class GridService implements OnInit {

  private baseURL = 'https://random-data-api.com';
  
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getRandomUsers(): Observable<IRandomUsers> {
   const URL = `${this.baseURL}/api/v2/users?size=2&is_xml=true`;
   return this.http.get<IRandomUsers>(URL);
  }
}
