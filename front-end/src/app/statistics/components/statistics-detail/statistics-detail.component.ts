import { Component, Input } from '@angular/core';
import { Statistics } from '../../shared/statistics';


@Component({
    selector: 'app-statistics-detail',
    templateUrl: './statistics-detail.component.html',
    styleUrls: ['./statistics-detail.component.css']
})
export class StatisticsDetailComponent {
    @Input() statistics: Statistics;
    @Input() loading: boolean;

    constructor(
    ) {
        this.statistics = new Statistics();
        this.loading = true;
    }
}
