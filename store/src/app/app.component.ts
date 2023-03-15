import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit 
{
  constructor(private _carts:CartService){}

  cart : Cart = {items:[]};
  title = 'store';

  ngOnInit(){
    this._carts.cart.subscribe((_cart)=>{
      this.cart=_cart;
    })
  }
}
