import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-information',
  templateUrl: './movie-information.component.html',
  styleUrls: ['./movie-information.component.css']
})
export class MovieInformationComponent implements OnInit {
imdbId:string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params=> {
      this.imdbId = params.id;
      console.log(this.imdbId);
    })

  }

}
