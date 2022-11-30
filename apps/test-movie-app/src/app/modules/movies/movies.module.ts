import { CommonUiModule } from '@test-movie-app/common-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { DetailsComponent } from './details/details.component';
import { CollapseItemDirective } from '../../common/directives/collapse-item.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MoviesComponent, DetailsComponent,CollapseItemDirective],
  imports: [CommonModule, MoviesRoutingModule, CommonUiModule,ReactiveFormsModule,FormsModule],
})
export class MoviesModule {}
