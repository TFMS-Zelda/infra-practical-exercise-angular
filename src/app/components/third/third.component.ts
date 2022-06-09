import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';
import { DigimonService } from '../../services/digimon.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styles: [],
})
export class ThirdComponent implements OnInit {
  constructor(private _jsonplaceholderService: JsonplaceholderService,
    private _digimonService: DigimonService) {


    // 1 api service
    this._jsonplaceholderService.getNewUsers().subscribe((data) => {
      console.log(this.newUsersArr = data)
    });

   
  }

  ngOnInit(): void { }

  // 1 api
  newUsersArr: any = [];


  // 2 api

  digimons: any = [];

  searchDigimons(termino: string) {
    this._digimonService.getDigimon(termino)
      .subscribe(data => {
        // console.log(data)
        this.digimons = data
      });
  }
}
