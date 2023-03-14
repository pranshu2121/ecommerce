import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent {

  product:Product = {
      id:1,
      title:"sneaker",
      image:"https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg?w=740&t=st=1678691450~exp=1678692050~hmac=fd89d9f1e73b6570f3e72ed3e097cc20e565e8861f48e40924106739eb2a84c3",
      category:"shoes",
      description:"descriptions",
      price:150,
  }
  @Output() addToCart = new EventEmitter();

  constructor(){}

  @Input() fullWidth = false;

  OnAddToCart(){
    this.addToCart.emit(this.product);

  }

}
