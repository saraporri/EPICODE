import { Component } from '@angular/core';
import { iMovies } from '../../models/movies';
import { MoviesService } from '../../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent  {
  movies: iMovies[] = [];

  constructor(private movieSvc: MoviesService, private router: Router) {}

  ngOnInit(){
    this.movieSvc.$movie.subscribe(movies => {
      this.movies = movies;
    });
  }
}
