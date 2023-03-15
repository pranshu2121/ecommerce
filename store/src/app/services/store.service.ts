import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private _http:HttpClient) { }

  getAllProduct(limit = '12',sort='desc',category?:string): Observable<Array<Product>>{
    return this._http.get<Array<Product>>(
      `${BASE_URL}/products${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    )
  }

  getAllCategory(): Observable<Array<string>>{
    return this._http.get<Array<string>>(
      `${BASE_URL}/products/categories`
    )
  }


}
