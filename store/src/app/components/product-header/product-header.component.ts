import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent {
  @Output() columsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<string>();
  @Output() sortChange = new EventEmitter<string>();

  sort="desc";
  itemsShowCount='12';

  OnSort(newSort:string){
      this.sort=newSort;
      this.sortChange.emit(newSort);
  }

  OnItemsUpdate(count:any){
    this.itemsShowCount=count;
    this.itemsCountChange.emit(count);
  }

  OnColumnsUpdate(cols:number){
    this.columsCountChange.emit(cols);
  }

}
