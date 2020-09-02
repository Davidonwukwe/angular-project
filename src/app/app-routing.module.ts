import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieInformationComponent } from './components/pages/movie-information/movie-information.component';
import {MovieSearchComponent} from  './components/pages/movie-search/movie-search.component';

const routes: Routes = [
  {
    path: '', 
    component: MovieSearchComponent
  },
  {
    path: 'movie', 
    component: MovieInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
