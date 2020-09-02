import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'movie-search';
  searchterm:string;


  receiveSearch($event) {
    this.searchterm = $event
    console.log("this is from app");
    console.log(`The search term is ${this.searchterm}`);
  }

}
