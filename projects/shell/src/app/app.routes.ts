import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ConfigComponent} from './config/config.component';
import {loadRemoteModule} from '@corpay/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'config',
    component: ConfigComponent
  },
  // {
  //   path: 'flights',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       // Skipped - already loaded upfront:
  //       remoteEntry: 'http://localhost:3000/remoteEntry.js',
  //       remoteName: 'mfe1',
  //       exposedModule: './Module'
  //     })
  //       .then(m => m.FlightsModule)
  // },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
