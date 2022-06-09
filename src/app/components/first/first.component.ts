import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styles: [
  ]
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saludo: string = 'Hola Intraway'

  enviarSaludo(termino: string) {
    
    console.log(termino);
    this.saludo = termino;

  }



}
