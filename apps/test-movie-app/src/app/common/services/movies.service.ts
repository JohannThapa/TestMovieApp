/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string;
  apiKey = '73b2fc9fab947354d61cb3faa1a40405';
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.language = 'en-US';
    this.region = 'US'
  }

  getMovies(type: string, page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${type}?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`)
  }

  getNowPlaying(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`)
  }

  searchByQuery(searchStr: string, page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}&page=${page}&language=${this.language}&region=${this.region}`)
  }

  getAllGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`)
  }
  getAllLanguages(): Observable<any> {
    return this.http.get(`${this.baseUrl}configuration/languages?api_key=${this.apiKey}`)
  }
  getMovieDetails(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`)
  }

  getByFilter(form: any,min:number, max: number, runtime: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=${form.sort_by}&include_adult=false&page=1&vote_average.gte=${min}&vote_average.lte=${max}&with_runtime.gte=0&with_runtime.lte=${runtime}&show_me=${form.show_me}`).pipe(map(res => {
      return res.results;
    }))
  }
  searchByKeyWords(key: string){
    return this.http.get<any>(`${this.baseUrl}/search/keyword?api_key=${this.apiKey}&query=${key}`).pipe(map(res => {
      return res;
    }));
  }
  getMovieCredits(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`)
  }

  getMovieVideos(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`)
  }

  getAllRecomendMovies(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/recommendations?api_key=${this.apiKey}`)
  }

  getPersonDetail(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}person/${id}?api_key=${this.apiKey}`)
  }

  getByPersonCast(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}person/${id}/movie_credits?api_key=${this.apiKey}`)
  }
}
