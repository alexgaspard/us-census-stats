import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsModule } from './statistics';
import { StatisticsComponent } from './statistics/pages/statistics/statistics.component';


const ROUTES: Routes = [
  { path: '', redirectTo: '/statistics', pathMatch: 'full' },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
