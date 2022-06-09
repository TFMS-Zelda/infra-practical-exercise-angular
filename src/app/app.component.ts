import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'practical-exercise-angular';

  date = new Date().toLocaleString();
  autor:string = 'Víctor Andres Tuíran Vergara'
  
}

