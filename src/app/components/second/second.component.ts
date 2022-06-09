import { Component, OnInit, Input } from '@angular/core';
import { InterfaceMovies } from 'src/app/interfaces/interface-movies';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styles: [
  ]
})
export class SecondComponent implements OnInit {


  @Input() saludoHijo: string = 'No tienes un saludo en este momento';


  constructor() { }

  ngOnInit(): void {
  }



  moviesArr: InterfaceMovies[] = [

    {
      id: 1,
      name: 'El Señor de los Anillos el Retorno del Rey',
      type: 'Fantasia/Aventura',
      value: '$94.000.000'
    },
    {
      id: 2,
      name: 'Harry Potter y el Caliz de Fuego',
      type: 'Fantasia/Aventura',
      value: '$150.000.000'
    },
    {
      id: 3,
      name: 'Titanic',
      type: 'Romance/Drama',
      value: '$200.000.000'
    }
  ]


}
