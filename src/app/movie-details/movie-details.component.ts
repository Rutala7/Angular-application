import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: any = {};

  constructor(private movieService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    this.movie = this.movieService.getMoviesByID(movieId || '');
  }
}
