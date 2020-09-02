import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { StaticSymbol } from '@angular/compiler';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
 
  @Output() searchEvent: EventEmitter<any> = new EventEmitter<string>(); 

  public searchterm:string;
  
  constructor() {
    
   }

  ngOnInit(): void {
    
  }
  onSubmit() {
   
  this.searchEvent.emit(this.searchterm)
     
    
    
  }
    
  }

