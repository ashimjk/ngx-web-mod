import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {APP_ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
