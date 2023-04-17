import { MoviesService } from './../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories$: any = [];
  category$: any = {}; 
  movies$: any = [];
  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
    console.log(this.categories$)
    // const id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((data) => {
    this.category$ = this.categoryService.getCategoryById(data.get('id') || '');
    this.movies$ = this.moviesService.getMoviesByCategory(data.get('id') || '');
  });
}
}