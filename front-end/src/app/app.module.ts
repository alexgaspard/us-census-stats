import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsModule } from './statistics';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // ReactiveFormsModule,
    // FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StatisticsModule,
    // NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
