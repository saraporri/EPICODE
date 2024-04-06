import { Injectable } from '@angular/core';
import { iUsers } from './models/users';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iMovies } from './models/movies';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http:HttpClient) { }

usersApiUrl:string=environment.usersUrl

  getAllUsers(){this.http.get<iUsers[]>(this.usersApiUrl)}
  getUserById(id:number){ return this.http.get<iUsers>(this.usersApiUrl+"/"+id)}


  moviesApiUrl:string=environment.moviesUrl

  getAllMovies(){this.http.get<iMovies[]>(this.moviesApiUrl)}
  getMoviesById(id:number){return this.http.get<iMovies>(this.moviesApiUrl+"/"+id)}






}
