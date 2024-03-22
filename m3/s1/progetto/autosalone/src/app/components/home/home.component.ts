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
    randomCar: iCars[] = [];
    brands!: string[];

constructor(private carsSvc:CarsService){}



    ngOnInit(): void {
        this.carsSvc.getAllCars().then(res=>{this.cars=res});
    }
  }
