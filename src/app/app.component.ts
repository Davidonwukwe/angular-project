import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-search';
  searchterm:string;


  receiveSearch($event) {
    this.searchterm = $event
    console.log("this is from app");
    console.log(`The search term is ${this.searchterm}`);
  }
}
