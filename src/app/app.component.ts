import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-search';
  allMovies = [];


  receiveMovies($event) {
    this.allMovies = $event
    console.log("this is from app");
    console.log(this.allMovies);
  }
}
