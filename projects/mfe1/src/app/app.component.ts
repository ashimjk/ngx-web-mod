import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <app-download></app-download>
    <app-upload></app-upload>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
