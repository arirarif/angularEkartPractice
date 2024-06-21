import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class containerComponent {
  listOfString: string[] = ['mark', 'stev', 'robin', 'sharif']


  searchText: string = '';



@ViewChild(ProductListComponent) productListComponent: ProductListComponent;


  setSearchText(value: string){
    this.searchText = value;
  }
}
