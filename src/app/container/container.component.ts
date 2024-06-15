import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class containerComponent {
  listOfString: string[] = ['mark', 'stev', 'robin', 'sharif']


  searchText: string = '';


  setSearchText(value: string){
    this.searchText = value;
  }
}