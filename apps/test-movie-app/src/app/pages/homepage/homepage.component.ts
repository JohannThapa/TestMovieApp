import { IMovies } from './../../common/interfaces/movies';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { MoviesService } from '../../common/services/movies.service';

@Component({
  selector: 'test-movie-app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit{

  moviesList: Array<IMovies> = [];
  constructor(
    private moviesService: MoviesService,
  ) {}

  ngOnInit() {

    this.getMovies('now_playing', 1);
  }
  getMovies(type: string, page: number): void {
    this.moviesService.getMovies(type, page).pipe(take(1)).subscribe(res => {
      this.moviesList = res.results;
    });
  }
}
