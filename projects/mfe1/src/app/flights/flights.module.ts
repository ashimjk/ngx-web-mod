import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FLIGHTS_ROUTES} from './flights.routes';
import {FlightsSearchComponent} from './flights-search/flights-search.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/flights/i18n/', '.json');
}

@NgModule({
  declarations: [FlightsSearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(FLIGHTS_ROUTES),
    TranslateModule.forChild({
      isolate: true,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class FlightsModule {
}
