import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingRoutingModule } from './trending-routing.module';
import { TrendingComponent } from './trending.component';
import { CommonUiModule } from '@test-movie-app/common-ui';

@NgModule({
  declarations: [TrendingComponent],
  imports: [CommonModule, CommonUiModule, TrendingRoutingModule],
})
export class TrendingModule {}
