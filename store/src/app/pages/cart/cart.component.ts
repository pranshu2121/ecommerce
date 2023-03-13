import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 
  cart: Cart = {
    items: [{
      product:"https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg?w=740&t=st=1678691450~exp=1678692050~hmac=fd89d9f1e73b6570f3e72ed3e097cc20e565e8861f48e40924106739eb2a84c3",
      name:"sneaker",
      id:1,
      quantity:1,
      price:150
    },
    {
      product:"https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg?w=740&t=st=1678691450~exp=1678692050~hmac=fd89d9f1e73b6570f3e72ed3e097cc20e565e8861f48e40924106739eb2a84c3",
      name:"sneaker",
      id:2,
      quantity:1,
      price:150
    }]
  }

  dataSource: Array<CartItem> = [];
  displayedColumns : Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'

  ]
  
  ngOnInit(): void  {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>):number{
   return items.
    map((item)=>item.price * item.quantity).
    reduce((prev,current)=> prev + current,0)

  }

}
