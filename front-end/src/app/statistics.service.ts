import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StatisticsService {

  constructor(private http: HttpClient) {
  }

  // Uses http.get() to load data from a single API endpoint
  list() {
    return this.http.get('/api/stats');
  }

  // helper function to build the HTTP headers
  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

}
