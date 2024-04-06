import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iMovies } from './models/movies';import { BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {



  moviesUrl = environment.moviesUrl;


  moviesArr: iMovies[]=[]


  movieSubject = new BehaviorSubject<iMovies[]>([]);


  $movie = this.movieSubject.asObservable()




  constructor(private http:HttpClient) { }


  moviesApiUrl:string=environment.moviesUrl

  getAllMovies(){this.http.get<iMovies[]>(this.moviesApiUrl)}
  getMoviesById(id:number){return this.http.get<iMovies>(this.moviesApiUrl+"/"+id)}






}
