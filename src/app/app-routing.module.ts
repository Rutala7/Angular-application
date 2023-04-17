import { CategoryComponent } from './category/category.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FilterMovieAccessGuard } from './guards/filter-movie-access.guard';
import { MyListComponent } from './my-list/my-list.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'tv-shows', component: TvShowsComponent},
  {path: 'my-list', component: MyListComponent},
  {path: 'movie/:id', component: MovieDetailsComponent, canActivate: [FilterMovieAccessGuard]},
  {path: 'category/:id', component: CategoryComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
