import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../../shared/interfaces/product.interface";
import { BaseHttpService } from "../../shared/data-access/base-http.service";

const LIMIT = 5;

@Injectable({providedIn: 'root'})

export class ProductsService extends BaseHttpService {
   /*Esto es una forma si no estaria el extends BaseHttpService
   private http = inject(HttpClient);
   */

  getProducts(page: number):Observable<Product[]> {
  //  return this.http.get('https://fakestoreapi.com/products');
    return this.http.get<any[]>(`${this.apiUrl}/products`, {
      params: {
        _limit: page * LIMIT,
      }
    });	
  }
}