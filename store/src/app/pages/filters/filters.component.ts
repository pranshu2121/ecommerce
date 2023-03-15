import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit,OnDestroy{
  @Output() showCategory = new EventEmitter<string>();

  constructor(private _store:StoreService){}

  categories!: Array<string>;
  categorySubscription !:Subscription;

  OnShowCategory(category:string){
       this.showCategory.emit(category);
  }

  ngOnInit(): void {
    this.categorySubscription = this._store.getAllCategory()
    .subscribe((res)=>{
      this.categories=res;
    })
  }
  ngOnDestroy(): void {
    if(this.categorySubscription)
    this.categorySubscription.unsubscribe();
  }

 
  
  

}
