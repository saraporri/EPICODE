import { Component, OnInit } from '@angular/core';
import { iCars } from '../../models/cars.interface';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss']
})
export class AudiComponent implements OnInit {
  cars: iCars[] = [];
  filteredCars: iCars[] = [];
  brands: string[] = [];

  constructor(private carsSvc: CarsService) {}

  ngOnInit(): void {
    this.carsSvc.getAllCars().then(res => {
      this.cars = res;
      this.filteredCars = this.cars.filter(car => car.brand === 'Audi');
    });
  }
}
