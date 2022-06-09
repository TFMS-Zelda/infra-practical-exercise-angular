import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor(private http: HttpClient) {

  }
  

  getNewUsers() {
    const urlBase = 'https://jsonplaceholder.typicode.com/users'
    return this.http.get(urlBase);
  }
}
