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





  constructor(private http:HttpClient) { }

usersApiUrl:string=environment.usersUrl

  getAllUsers(){this.http.get<iUsers[]>(this.usersApiUrl)}
  getUserById(id:number){ return this.http.get<iUsers>(this.usersApiUrl+"/"+id)}

}
