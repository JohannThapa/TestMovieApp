import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MoviesService } from './common/services/movies.service';
import { CommonUiModule } from '@test-movie-app/common-ui';
import { MoviesModule } from './modules/movies/movies.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HeaderComponent,
    SidebarComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    CommonUiModule,
    AppRoutingModule,
    HttpClientModule,
    MoviesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
