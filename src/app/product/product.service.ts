import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiURL = 'http://localhost:3000/';

  httpOptions = {
    // headsers: new HttpHeaders({
    //   'Content-Type': 'application/json',
    // }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + 'products').pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  create(body: Product): Observable<any> {
    return this.httpClient
      .post(this.apiURL + 'post', JSON.stringify(body), this.httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  get(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + 'product/' + id).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  update(id: number, body: Product): Observable<any> {
    return this.httpClient
      .put(
        this.apiURL + 'product/' + id,
        JSON.stringify(body),
        this.httpOptions
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.apiURL + 'product/' + id).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
