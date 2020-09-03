import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service'
import { movieData } from '../../models/movieData'
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnChanges, OnInit {
@Input() searchterm:string;
allMovies:movieData;
isError:Boolean = false;
test = 3;

  constructor(private service: MovieServiceService) { }

  ngOnInit(): void {

    }
  
  ngOnChanges(changes: SimpleChanges){
      if(this.searchterm){
         this.service.getMovies(this.searchterm)
        .subscribe(data=>{

          this.allMovies = data.Search;
        
          
        }, error=>{ if(error){
          console.log("There is an error");
          this.isError = true;
        } else {
          this.isError = false;

        }
          
        
        
        })
        
        
      }
     
    }
  
  


}
  