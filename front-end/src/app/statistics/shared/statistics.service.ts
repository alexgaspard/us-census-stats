import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpService } from '../../shared/http.service';
import { Statistics } from './statistics';

@Injectable({
    providedIn: 'root'
})
export class StatisticsService {

    private STATISTICS_URL = `${environment.API_URL}/stats`;

    constructor(
        private http: HttpService
    ) { }

    getStatistics(field: string): Observable<Statistics> {
        return this.http.get<Statistics>(this.STATISTICS_URL, { 'field': field });
    }
}
