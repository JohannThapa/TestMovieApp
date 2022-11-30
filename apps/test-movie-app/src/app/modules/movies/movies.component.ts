/* eslint-disable @typescript-eslint/no-explicit-any */
import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, take } from 'rxjs';
import { GenresListModel } from '../../common/models/genres-list.model';
import { MoviesService } from '../../common/services/movies.service';

const DEFAULT_DURATION = 300;
@Component({
  selector: 'test-movie-app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ]
})
export class MoviesComponent implements OnInit {


  form!: FormGroup;
  collapsed = false;
  collapsed1 = false;
  maincategory: any[];
  moviesList: any;
  brandItemsCount: any;
  genreItemsCount: any;
  genres!: any;
  sortBy = [
    {
      value: '',
      name: '--- Choose any---'
    },
    {
      value: 'popularity.asc',
      name: 'Popularity Ascending'
    },
    {
      value: 'popularity.desc',
      name: 'Popularity Descending'
    },
    {
      value: 'release_date.asc',
      name: 'Released (Low to High)'
    },
    {
      value: 'release_date.desc',
      name: 'Released (High to Low)'
    },
    {
      value: 'revenue.asc',
      name: 'Revenue (Low to High)'
    },
    {
      value: 'revenue.desc',
      name: 'Revenue (High to Low)'
    },
    {
      value: 'primary_release_date.asc',
      name: 'Release Date Ascending'
    },
    {
      value: 'primary_release_date.desc',
      name: 'Release Date Descending'
    },
    {
      value: 'original_title.asc',
      name: 'Original Title Ascending'
    },
    {
      value: 'original_title.desc',
      name: 'Original Title Descending'
    },
    {
      value: 'title.asc',
      name: 'Title Ascending'
    },
    {
      value: 'title.desc',
      name: 'Title Descending'
    },
    {
      value: 'vote_average.asc',
      name: 'Rating Ascending'
    },
    {
      value: 'vote_average.desc',
      name: 'Rating Descending'
    },
    {
      value: 'vote_count.asc',
      name: 'Vote Count Ascending'
    },
    {
      value: 'vote_count.desc',
      name: 'Vote Count Descending'
    }
  ]
  hello = ['Category', 'Sort By', 'Genres', 'Languages', 'User score', 'Runtime', 'Availabilities', 'Show Me']
  hexColors: string[] = [];
  languages!: any[];
  scoreRange = 10;
  runtimeRange = 360;
  minRange: number;
  maxRange: number;
  rated: string;
  constructor(
    private _fb: FormBuilder,
    private moviesService: MoviesService) {
    this.minRange = 2;
    this.maxRange = 6;
    this.rated = 'Rated 2 - 6'
    this.maincategory = [
      {
        id: '/top-rated',
        name: 'Top rated'
      },
      {
        id: '/',
        name: 'Upcoming'
      },
      {
        id: '/trending',
        name: 'Popular'
      },
    ];

  }
  ngOnInit(): void {
    this.createForm();
    this.getMovies('popular', 1);
    this.collapsed = false;
    this.moviesService.getAllGenres().subscribe(res => {
      this.genres = res.genres;
      res.genres.forEach(() => {
        this.genres.map((x: any) => x.color = this.getRandomColor());
      });
    }
    );
    this.moviesService.getAllLanguages().subscribe(res => {
      this.languages = res;
      console.log(res)
    })

  }
  createForm(item: any = {}) {
    const date = new Date();
    this.form = this._fb.group({
      sort_by: ['popularity.asc'],
      with_genres: [],
      language: ['xx'],
      vote_average_min: [],
      vote_average_max: [],
      with_runtime_min: [0],
      with_runtime_max: [],
      'with_runtime_max.gte': [0],
      'with_runtime_max.lte': [],
      show_me: [0],
      show_all: [true],
      id: [item.id ? item.id : 0],
    });
    console.log(this.form)
  }

  getValue() {
    console.log('this.minRange', this.minRange);
    if (this.minRange > this.maxRange) {
      this.rated = `Rated ${this.minRange} - ${this.maxRange}`
    }
  }
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  inputRangeHandler(event: any) {
    console.log(event)
    const inputRangeValue = event.target.value;
    this.scoreRange = inputRangeValue / 10;
    console.log(inputRangeValue / 10)
  };
  inputrunRangeHandler(event: any) {
    console.log(event)
    const inputRangeValue = event.target.value;
    this.runtimeRange = inputRangeValue;
  };
  minRangeHandler(event: any) {
    const inputRangeValue = event.target.value;
    this.minRange = inputRangeValue;
    if (inputRangeValue > this.maxRange) {
      this.rated = 'Rated ' + this.maxRange + '-' + this.minRange;
    }
    else {
      this.rated = 'Rated ' + this.minRange + '-' + this.maxRange;
    }
  };
  maxRangeHandler(event: any, min: number) {
    const inputRangeValue = event.target.value;
    this.maxRange = inputRangeValue;
    if (inputRangeValue > min) {
      this.rated = 'Rated ' + this.minRange + '-' + this.maxRange;
    }
    else {
      this.rated = 'Rated ' + this.maxRange + '-' + this.minRange;
    }
  };
  getMovies(type: string, page: number): void {
    this.moviesService.getMovies(type, page).pipe(take(1)).subscribe(res => {
      this.moviesList = res.results;
    });
  }
  onSubmit() {
    console.log(this.form.value)
    this.moviesService.getByFilter(this.form.value, this.minRange, this.maxRange, this.runtimeRange)
      .subscribe(res => {
        this.moviesList = res
      }
      );
  }
  returnId(item: any){return item.id}
}
