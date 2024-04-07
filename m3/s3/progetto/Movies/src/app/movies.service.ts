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

deleteMovie(id:number){
  return this.http.delete<iMovies>(this.moviesUrl+ '/' +id)
  .pipe(tap(()=>{
    this.moviesArr = this.moviesArr.filter(p => p.id != id)
    this.movieSubject.next(this.moviesArr)
  }))
}
addMovie(newMovie: Partial<iMovies>){
  return this.http.post<iMovies>(this.moviesUrl,newMovie)
  .pipe(tap(() => {
    this.getAllMovies().subscribe(movie => this.movieSubject.next(movie))
  }))
}



}
