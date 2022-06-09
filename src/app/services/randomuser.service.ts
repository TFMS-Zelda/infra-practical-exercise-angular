import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomuserService {

  constructor( private http: HttpClient) { }


  getUsers() {
    const urlBase = 'https://randomuser.me/api/?gender=female'
    return this.http.get(urlBase);
  }
}
