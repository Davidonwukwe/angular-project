import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movieData } from '../models/movieData';
import { movieSpec} from '../models/movieSpec';

import { SearchBarComponent } from '../components/search-bar/search-bar.component';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

//  searchterm:string;



  constructor(private http:HttpClient) {
    
   }
   getMovies(search:string):Observable<any> {
   
     
     return this.http.get(`https://www.omdbapi.com/?s=${search}&apikey=bf903b12`);
   }
   getMovieInfo(id:string):Observable<any>{
     return this.http.get(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=bf903b12`)
   }
}
