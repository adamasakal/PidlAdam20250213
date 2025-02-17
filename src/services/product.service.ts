import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Prouct {
  id: number;
  title: string;
  price: number;
  rating: number;
  stock: number;
}

export interface ProuctResponse {
  products : Prouct[];
}


@Injectable({
  providedIn: 'root'
})


export class ProductService {

  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getProducts() : Observable<ProuctResponse> {
    return this.http.get<ProuctResponse>(this.apiUrl);
  }
}
