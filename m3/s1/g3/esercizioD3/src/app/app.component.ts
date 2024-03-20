import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'esercizioD3';
}

export interface iArticolo {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  active: boolean;
}
export class AppComponent {

  articoli:iArticolo[] = [];

  ngOnInit(){

    fetch('../assets/pizze.json')
    .then(pizze => pizze.json())
    .then((pizze:iPizze[]) => this.pizzeArr = pizze)

  }

  soloDisponibili(){
    this.pizzeArr = this.pizzeArr.filter(p => p.disponibile)
  }

}

