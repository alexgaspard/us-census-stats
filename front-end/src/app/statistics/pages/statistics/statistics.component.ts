import { Component, OnInit } from '@angular/core';
import { Statistics } from '../../shared/statistics';
import { StatisticsService } from '../../shared/statistics.service';


@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

    statistics: Statistics;
    loading: boolean;

    constructor(
        private statisticsService: StatisticsService,
    ) {
        this.statistics = new Statistics();
        this.loading = false;
    }

    getStatistics(field: string): void {
        this.statistics = new Statistics();
        this.loading = true;
        this.statisticsService.getStatistics(field).subscribe(statistics => {
            this.statistics = statistics;
            this.loading = false;
        });
    }
}
