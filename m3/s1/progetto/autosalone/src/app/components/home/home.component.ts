import { CarsService } from '../../cars.service';
import { iCars } from './../../models/cars.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})




export class HomeComponent {
    cars!: iCars[];
    randomCars: iCars[] = [];
    brands!: string[];

constructor(private carsSvc:CarsService){}



    ngOnInit(): void {
        this.carsSvc.getAllCars().then(res=>{this.cars=res;
          this.getRandomCars(2)});
    }



    getRandomCars(n: number): void {
      const randomIndices: number[] = [];
      while (randomIndices.length < n) {
        const randomIndex = Math.floor(Math.random() * this.cars.length);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
          this.randomCars.push(this.cars[randomIndex]);
        }
      }
    }
  }
