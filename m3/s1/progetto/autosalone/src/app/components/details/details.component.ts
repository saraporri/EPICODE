import { CarsService } from './../../cars.service';
import { iCars } from './../../models/cars.interface';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})

  export class DetailsComponent implements OnInit {


car:iCars|undefined
id:string|null=null





    constructor(private router: ActivatedRoute,private carsService:CarsService) {}

    ngOnInit() {
      this.router.params.subscribe((params) => {this.id=params["id"]




      if (this.id) {
        this.carsService.getCarById(this.id).then((car) => {
          this.car = car;
        });
      }
      });
    }
  }
