import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MovieServiceService} from '../../../services/movie-service.service'
import { movieSpec} from '../../../models/movieSpec';


@Component({
  selector: 'app-movie-information',
  templateUrl: './movie-information.component.html',
  styleUrls: ['./movie-information.component.css']
})
export class MovieInformationComponent implements OnInit {
imdbId:string;
movieInfo:movieSpec;
isError:Boolean = false;

  constructor(private route: ActivatedRoute, private service: MovieServiceService) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params=> {
      this.imdbId = params.id;
      console.log(this.imdbId);
    
      this.service.getMovieInfo(this.imdbId)
     .subscribe(data=>{

      this.movieInfo = data;
       console.log("//////////");
       console.log(this.movieInfo);
     }, error=>{ if(error){
       console.log("David see the error" + error);
       this.isError = true;
     } else {
      this.isError = false;

     }
        
     })
    })
}
}
