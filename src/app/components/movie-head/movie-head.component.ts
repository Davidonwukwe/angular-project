import { Component, OnInit, Input } from '@angular/core';
import { movieSpec} from '../../models/movieSpec'

@Component({
  selector: 'app-movie-head',
  templateUrl: './movie-head.component.html',
  styleUrls: ['./movie-head.component.css']
})
export class MovieHeadComponent implements OnInit{
  @Input() movieInfo:movieSpec;
   
  Title; imdbRating;


  constructor() { }

  ngOnInit(): void {
    let {Title, imdbRating} = this.movieInfo;
    this.Title = Title;
    this.imdbRating = imdbRating; 
    
  }
}
