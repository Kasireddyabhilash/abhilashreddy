import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getComments(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }
}
