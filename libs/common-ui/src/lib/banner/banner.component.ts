import { Component, Input } from '@angular/core';

@Component({
  selector: 'test-movie-app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() public title!: string;
  @Input() public movies: any;
  imagify(params:any) {
    return `https://image.tmdb.org/t/p/w440_and_h660_face${params}`
  }
}
