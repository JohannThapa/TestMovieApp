import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BannerComponent } from './banner/banner.component';
import { TagComponent } from './tag/tag.component';
import { SingleCardComponent } from './single-card/single-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CardComponent,
    BannerComponent,
    TagComponent,
    SingleCardComponent,
  ],
  exports: [CardComponent, BannerComponent, TagComponent, SingleCardComponent],
})
export class CommonUiModule {}
