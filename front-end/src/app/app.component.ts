import { Component, OnInit } from '@angular/core';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public results;

  constructor(private statisticsService: StatisticsService) {this.results = [];}

  ngOnInit() {
    this.getStatistics();
  }

  getStatistics() {
    this.statisticsService.list().subscribe(
      data => {
        this.results = data;
      },
      err => console.error(err),
      () => console.log('done loading results')
    );
  }
}
