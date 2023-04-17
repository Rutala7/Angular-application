import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent {
  listOfShows: String[] = ['Friends', 'Mountain Kind', 'Routing Experience'];
}
