import { MoviesService } from './../../common/services/movies.service';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'test-movie-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  suggestionsIsOpen = false;

  query: FormControl = new FormControl('');
  Length = 0;
  hasSuggestions = false;

  results: any[] = [];
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private elementRef: ElementRef,
    private searchService: MoviesService,
    private router: Router
) {}
ngOnInit(): void {
  //new search
  this.query.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((query) => {
          if (query) {
              this.searchService
                  .searchByKeyWords(query)
                  .subscribe((result: any) => {
                    this.results = result.results;
                          this.Length = result.total_results;
                          this.hasSuggestions = true;
                  });
          } else {
              this.hasSuggestions = false;
          }
      });
}

AutoCompleteSearch(event: any) {
  this.hasSuggestions = false;
  this.suggestionsIsOpen = false;
  this.query.setValue('')
  this.results.forEach((item) => {
  //     if (event == item.name) {
  //         if (item.type == 'movies') {
  //             const urlPath = `/movies/detail/${item.id}`;
  //             this.router.navigate([urlPath]);
  //         }

  // let slug =  item.name
  // slug  = slug.replace(/ /g,'_');
  //         const urlPath = `/movies/detail/${item.id}`;
  //         this.router.navigate([urlPath]);
  //         this.hasSuggestions = false;
  //     }
  });
}
@HostListener('document:click', ['$event']) clickout(event: any) {
  if (event.target.id !== 'keyword') {
      this.suggestionsIsOpen = false;
      this.hasSuggestions = false;
  }
}
open() {
  this.suggestionsIsOpen = true;
}

onInputFocus(event: FocusEvent): void {
  const input = event.target as HTMLInputElement;
}
}
