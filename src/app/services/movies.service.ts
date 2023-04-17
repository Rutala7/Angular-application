import { moviesList } from './../shared/data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies() {
    return moviesList.movies;
  }

  getMoviesByID(id$: string) {
    return moviesList.movies.find((movie) => movie.id.toString() == id$);
  }

  getMoviesByCategory(id$: string) {
    return moviesList.movies.filter((movie) => movie.categoryId.toString() == id$);
  }
}
