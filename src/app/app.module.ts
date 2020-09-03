import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieInformationComponent } from './components/pages/movie-information/movie-information.component';
import { MovieSearchComponent } from './components/pages/movie-search/movie-search.component';
import { MovieHeadComponent } from './components/movie-head/movie-head.component';
import { MovieCoverComponent } from './components/movie-cover/movie-cover.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchResultsComponent,
    MovieItemComponent,
    HeaderComponent,
    MovieInformationComponent,
    MovieSearchComponent,
    MovieHeadComponent,
    MovieCoverComponent,
    InfoSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
