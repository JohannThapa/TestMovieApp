import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { IMovies } from '../../common/interfaces/movies';
import { MoviesService } from '../../common/services/movies.service';

@Component({
  selector: 'test-movie-app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.scss'],
})
export class TopratedComponent implements OnInit{
  moviesList: Array<IMovies> = [];
  constructor(
    private moviesService: MoviesService,
  ) {}

  ngOnInit() {

    this.getMovies('top_rated', 1);
  }
  getMovies(type: string, page: number): void {
    this.moviesService.getMovies(type, page).pipe(take(1)).subscribe(res => {
      this.moviesList = res.results;
    });
  }
}
