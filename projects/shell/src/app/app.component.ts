import {Component, OnInit} from '@angular/core';
import {MicroFrontend} from './micro-frontends/micro-frontend';
import {Router} from '@angular/router';
import {LookupService} from './micro-frontends/lookup.service';
import {buildRoutes} from './util/menu-util';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><img src="../assets/angular.png" width="50px" alt="angular"></li>
      <li><a routerLink="/">Home</a></li>
      <li *ngFor="let mfe of microFrontends"><a [routerLink]="mfe.routePath">{{mfe.displayName}}</a></li>
      <li><a routerLink="/config">Config</a></li>
    </ul>

    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  microFrontends: MicroFrontend[] = [];

  constructor(
    private router: Router,
    private lookupService: LookupService) {
  }

  async ngOnInit(): Promise<void> {
    this.microFrontends = await this.lookupService.lookup();
    const routes = buildRoutes(this.microFrontends);
    this.router.resetConfig(routes);
  }
}
