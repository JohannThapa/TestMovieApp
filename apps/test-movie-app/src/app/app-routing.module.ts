import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full'},
  {path: 'movies', loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule)},
  {path: 'trending', loadChildren: () => import('./modules/trending/trending.module').then(m => m.TrendingModule)},
  {path: 'top-rated', loadChildren: () => import('./modules/toprated/toprated.module').then(m => m.TopratedModule)},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'disabled',
      anchorScrolling: 'disabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
