import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <img src="../assets/angular.png" width="50" style="padding-top: 10px">
    <div>
      <button routerLink="/">Home</button>
      <span style="padding-right: 10px"></span>
      <button routerLink="/flights/flights-search">Flights</button>
    </div>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
