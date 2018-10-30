import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { StatisticsDetailComponent } from './components/statistics-detail/statistics-detail.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    StatisticsComponent, StatisticsDetailComponent
  ]
})
export class StatisticsModule { }
