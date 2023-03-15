import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

const ROW_HEIGHT: {[id:number]:number} = {1:400, 3:335, 4:350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy{

   constructor(private _cart: CartService,
    private _store:StoreService){}

  cols=3;
  rowHeight=ROW_HEIGHT[this.cols];
  category!:string;
  products!: Array<Product>
  sort = 'desc';
  count= '12';
  productSubscription !: Subscription;


  onColumnCountChange(colsNumber:number){
      this.cols=colsNumber;
      this.rowHeight=ROW_HEIGHT[this.cols];
  }

  onItemsChange(newcount:any){
    this.count=newcount;
    this.getProducts();
  }

  onSortChange(sort:string){
    this.sort=sort;
    this.getProducts();
  }

  OnShowCategory(newCategory:string){
       this.category=newCategory;
       this.getProducts();
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

  getProducts(){
    this.productSubscription = this._store.getAllProduct(this.count,this.sort,this.category)
    .subscribe((_products)=>{
      this.products=_products;
    })
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    if(this.productSubscription){
      this.productSubscription.unsubscribe();
    }
  }

}
