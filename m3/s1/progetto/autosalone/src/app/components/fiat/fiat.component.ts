import { Component, OnInit } from '@angular/core';
import { iCars } from '../../models/cars.interface';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrls: ['./fiat.component.scss']
})
export class FiatComponent implements OnInit {
  cars: iCars[] = [];
  filteredCars: iCars[] = [];
  brands: string[] = [];

  constructor(private carsSvc: CarsService) {}

  ngOnInit(): void {
    this.carsSvc.getAllCars().then(res => {
      this.cars = res;
      this.filteredCars = this.cars.filter(car => car.brand === 'Fiat');
    });
  }
}
