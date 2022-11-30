import { Component, Input } from '@angular/core';

@Component({
  selector: 'test-movie-app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
})
export class SingleCardComponent {

  @Input() public model: any;
  @Input() public isMovie = false;
  imagify(params:any) {
    return `https://image.tmdb.org/t/p/w710_and_h400_face${params}`
  }
}
