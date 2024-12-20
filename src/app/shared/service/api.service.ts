import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/users'
  getUserData() {
    return this.http.get(this.url)
  }
}
