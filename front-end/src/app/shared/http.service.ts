import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private HTTP_OPTIONS = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' }) };

  constructor(
    private http: HttpClient
  ) { }

  get<T>(url: string, filters: { [param: string]: string } = {}): Observable<T> {
    return this.http.get<T>(url, { params: filters }).pipe(
      catchError(this.handleError)
    );
  }

  update<T>(url: string, object: T): Observable<T> {
    return this.http.put<T>(url, object, this.HTTP_OPTIONS).pipe(
      catchError(this.handleError)
    );
  }

  add<T>(url: string, object: T): Observable<T> {
    return this.http.post<T>(url, object, this.HTTP_OPTIONS).pipe(
      catchError(this.handleError)
    );
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url, this.HTTP_OPTIONS).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    const message = (error.message) ? error.message : 'Server error';
    console.error(message);
    if (error.status === 401) {
      window.location.href = '/';
    }
    return throwError(message);
  }
}
