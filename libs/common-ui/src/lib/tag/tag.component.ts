import { Component, Input } from '@angular/core';

@Component({
  selector: 'test-movie-app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  @Input() name!: string;
  @Input() color!: string;
}
