import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  Subject,
  throwError,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}
  handleError(err: any) {
    if (err.error instanceof Error) {
      console.log(`Clien-side error: ${err.error.message}`);
    } else {
      console.log(`Server-side error: ${err.status} - ${err.error}`);
    }
  }
  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.API).pipe(
      map(data => {
        this.products.next(data)
        return data
      })
    )
  }
}
