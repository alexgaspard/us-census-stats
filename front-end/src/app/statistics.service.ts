import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StatisticsService {

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get('/api/stats');
  }

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

}
