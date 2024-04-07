import { Injectable } from '@angular/core';
import { iUsers } from './models/users';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  userUrl = environment.usersUrl


  userArr: iUsers[]=[]


  userSubject = new BehaviorSubject<iUsers[]>([]);


  $users= this.userSubject.asObservable()





  constructor(private http:HttpClient) {this.getAllUsers().subscribe(data => {
    this.userSubject.next(data)
    this.userArr = data
  }) }

getAllUsers(){return this.http.get<iUsers[]>(this.userUrl)}
}
