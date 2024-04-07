import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iMovies } from './models/movies';
import { BehaviorSubject,tap} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {



  moviesUrl = environment.moviesUrl;


  moviesArr: iMovies[]=[]


  movieSubject = new BehaviorSubject<iMovies[]>([]);


  $movie = this.movieSubject.asObservable()




  constructor(private http:HttpClient) {
    this.getAllMovies().subscribe(data=>{
      this.movieSubject.next(data)
    this.moviesArr=data}) }

getAllMovies(){return this.http.get<iMovies[]>(this.moviesUrl)}




}
