import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ConfigComponent} from './config/config.component';

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
  {
    path: 'plugin',
    loadChildren: () => import('./plugin/plugin.module').then(m => m.PluginModule)
  }
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
