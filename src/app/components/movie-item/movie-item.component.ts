import { Component, OnInit, Input } from '@angular/core';
import {movieData} from '../../models/movieData'
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
@Input() movie:movieData;
Title:string;
Poster:string;
imdbID:string;
Year:string;

  constructor() { }

  ngOnInit(): void {
  let {Poster, Title, imdbID, Year} = this.movie;
  this.Poster = Poster;
  this.Title = Title;
  this.imdbID = imdbID;
  this.Year = Year;

  }

}
