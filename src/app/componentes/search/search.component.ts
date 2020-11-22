import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() messageToEmit = new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
  }

  input1:string = ''; 

  process () {
    this.messageToEmit.emit(this.input1) 
  }
}
