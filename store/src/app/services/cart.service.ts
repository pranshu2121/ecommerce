import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem) {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open('1 item is added to cart', 'ok', { duration: 2000 });
    console.log(this.cart.value);
  }

  removeFromCart(item:CartItem){
   let itemsRemoval !: CartItem;

   let filteredItems= this.cart.value.items.map((_item)=>{
    if(_item.id === item.id){
    _item.quantity--;

    if(_item.quantity ===0){
       itemsRemoval=_item;
    }
    }
    return _item;
   });

  if(itemsRemoval){
    filteredItems = this.removeCart(itemsRemoval,false);
  }
  this.cart.next({items:filteredItems});
  this._snackBar.open('Item removed', 'ok', { duration: 2000 })

  }

  getTotal(items: Array<CartItem>): number {
    return items.
      map((item) => item.price * item.quantity).
      reduce((prev, current) => prev + current, 0)
  }

  clearCart() {
    this.cart.next({ items: [] });
    this._snackBar.open('Cart is cleared', 'ok', { duration: 2000 });
  }

  removeCart(item: CartItem,notify=true): Array<CartItem> {
    const filteredItem = this.cart.value.items.filter
      ((_item) => _item.id !== item.id);
      if(notify){
        this.cart.next({ items: filteredItem });
        this._snackBar.open('Item removed', 'ok', { duration: 2000 })
      }

      return filteredItem;
   
  }


}
