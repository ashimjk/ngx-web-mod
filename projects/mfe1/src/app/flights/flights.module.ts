import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FLIGHTS_ROUTES} from './flights.routes';
import {FlightsSearchComponent} from './flights-search/flights-search.component';


@NgModule({
  declarations: [FlightsSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES)
  ]
})
export class FlightsModule {
}
