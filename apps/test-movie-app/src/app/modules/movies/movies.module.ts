import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [MoviesComponent, DetailsComponent],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
