import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  constructor(private http: HttpClient) {


  }

  getDigimon(termino: string) {

    return this.http.get(`https://digimon-api.herokuapp.com/api/digimon/name/${termino}`);

  }

}
