import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  movies: any = [];
  categories: any = [];
  constructor(private movieService: MoviesService, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.categories = this.categoryService.getCategories();
  }
}
