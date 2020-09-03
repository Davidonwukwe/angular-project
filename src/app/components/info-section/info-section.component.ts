import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css']
})
export class InfoSectionComponent implements OnInit {
  @Input() movieInfo
  Actors; Plot; Director; Writer; Awards;

  constructor() { }

  ngOnInit(): void {
    let {Actors, Plot, Director, Writer, Awards} = this.movieInfo;
    this.Plot = Plot;
    this.Director = Director;
    this.Writer = Writer;
    this.Awards = Awards;
    this.Actors = Actors;
    
  }
 

}
