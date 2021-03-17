import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {APP_ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FlightsModule} from './flights/flights.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FlightsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
