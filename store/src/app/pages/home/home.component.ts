import { Component } from '@angular/core';

const ROW_HEIGHT: {[id:number]:number} = {1:400, 3:335, 4:350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cols=3;
  rowHeight=ROW_HEIGHT[this.cols];
  category!:string;


  onColumnCountChange(colsNumber:number){
      this.cols=colsNumber;
      this.rowHeight=ROW_HEIGHT[this.cols];

  }

  OnShowCategory(newCategory:string){
       this.category=newCategory;
  }

}
