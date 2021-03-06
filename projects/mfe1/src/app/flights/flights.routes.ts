import {Routes} from '@angular/router';
import {FlightsSearchComponent} from './flights-search/flights-search.component';

export const FLIGHTS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'flights-search'
  },
  {
    path: 'flights-search',
    component: FlightsSearchComponent
  }
];
