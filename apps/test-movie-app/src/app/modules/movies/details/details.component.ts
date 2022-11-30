/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMovies } from './../../../common/interfaces/movies';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../common/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'test-movie-app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent  implements OnInit {

  movie!: IMovies;
  cast = [];
  recomendedMovieList: any;
  video: any;
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id = params['url'];
        this.getMovieDetail(id);
        this.getMovieCredits(id);
        this.getMovieVideo(id);
        this.getRecomendedMovie(id);
      }
    );
  }


  getMovieDetail(id: any) {
    this.moviesService.getMovieDetails(id).pipe(take(1)).subscribe(
      movie => {
        this.movie = movie;
      }
    );
  }

  getMovieCredits(id: any) {
    this.moviesService.getMovieCredits(id).pipe(take(1)).subscribe(
      res => {
        res.cast = res.cast.filter( (item: any) => { return item.profile_path });
        this.cast = res.cast.slice(0, 5);
      }
    );
  }

  getMovieVideo(id: any) {
    this.moviesService.getMovieVideos(id).pipe(take(1)).subscribe(
      res => {
        if (res?.results?.length > 0) {
          this.video = res.results[0];
       }
      }
    );
  }

  getRecomendedMovie(id: any) {
    this.moviesService.getAllRecomendMovies(id).pipe(take(1)).subscribe(
      res => {
        this.recomendedMovieList = res.results.slice(0, 12);
      }
    );
  }
}
