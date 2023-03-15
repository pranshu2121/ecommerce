import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent {

  @Input() product!:Product;  
  @Output() addToCart = new EventEmitter();

  constructor(){}

  @Input() fullWidth = false;

  OnAddToCart(){
    this.addToCart.emit(this.product);

  }

}
