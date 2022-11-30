import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopratedRoutingModule } from './toprated-routing.module';
import { TopratedComponent } from './toprated.component';
import { CommonUiModule } from '@test-movie-app/common-ui';

@NgModule({
  declarations: [TopratedComponent],
  imports: [CommonModule, CommonUiModule, TopratedRoutingModule],
})
export class TopratedModule {}
