import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {

  text: string;
  @Output() search = new EventEmitter()

  constructor() {
    console.log('Hello SearchComponent Component');
    this.text = 'This is a search component';
  }

  openSearch(){
//this.search.emit({value});
      console.log('ee');
  }

}
