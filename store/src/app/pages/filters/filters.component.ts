import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();

  categories = [
    'shoes','pants'
  ];

  OnShowCategory(category:string){
       this.showCategory.emit(category);
  }

}
