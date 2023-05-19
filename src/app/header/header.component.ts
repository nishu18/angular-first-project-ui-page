import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';

  @Output() searchEvent = new EventEmitter<any>()

  constructor(){
  }
  ngOnInit(): void {
    
  }

onSearch(){
  this.searchEvent.emit(this.searchTerm)
}


}
