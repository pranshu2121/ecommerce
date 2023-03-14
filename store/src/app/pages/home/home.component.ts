import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROW_HEIGHT: {[id:number]:number} = {1:400, 3:335, 4:350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

   constructor(private _cart: CartService){}

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

  OnAddToCart(product: Product){
   this._cart.addToCart({
    product:product.image,
    name:product.title,
    price:product.price,
    id:product.id,
    quantity:1
   })
  }

}
