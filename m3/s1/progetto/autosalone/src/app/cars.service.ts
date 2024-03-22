import { Injectable } from '@angular/core';
import {iCars} from "./models/cars.interface"

@Injectable({
  providedIn: 'root'
})
export class CarsService {


  getAllCars():Promise<iCars[]>{

    return fetch('../assets/db.json')
    .then(res => res.json())
    .then((res:iCars[]) => res)

  }

  getAvailableCars():Promise<iCars[]>{
    return this.getAllCars()
    .then(res => res.filter(c => c.available))
  }

  getNonAvailableCars():Promise<iCars[]>{
    return this.getAllCars()
    .then(res => res.filter(c => !c.available))
  }

  getCarById(id:string):Promise<iCars | undefined>{
    return this.getAllCars()
    .then(res => res.find(c => c.id == id))
  }
}
