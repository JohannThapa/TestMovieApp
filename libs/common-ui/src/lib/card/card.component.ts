/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'test-movie-app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public model: any;
  @Input() public isMovie = false;
 imagify(params:any) {
    return `https://image.tmdb.org/t/p/w300_and_h450_face${params}`
  }
}
