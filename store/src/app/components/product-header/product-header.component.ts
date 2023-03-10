import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent {
  @Output() columsCountChange = new EventEmitter<number>();

  sort="desc";
  itemsShowCount=12;

  OnSort(newSort:string){
      this.sort=newSort;
  }

  OnItemsUpdate(count:number){
    this.itemsShowCount=count;
  }

  OnColumnsUpdate(cols:number){
    this.columsCountChange.emit(cols);
  }

}
