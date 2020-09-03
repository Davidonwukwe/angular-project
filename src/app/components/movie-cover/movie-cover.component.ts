import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.css']
})
export class MovieCoverComponent implements OnInit {
  @Input() movieInfo;
  Title; Poster; Genre; Year; Country; Rated; Runtime; imdbRating; Ratings;

  constructor() { }

  ngOnInit(): void {
    let {Title, Poster, Genre, Year, Country, Rated, Runtime, imdbRating, Ratings} = this.movieInfo;
    this.Poster = Poster;
    this.Genre = Genre;
    this.Year = Year;
    this.Country = Country;
    this.Rated = Rated;
    this.Runtime = Runtime;
    this.imdbRating = imdbRating;
    this.Ratings = Ratings;
    this.Title = Title;
  

  }

}
