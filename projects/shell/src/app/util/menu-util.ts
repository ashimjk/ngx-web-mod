import {Routes} from '@angular/router';
import {MicroFrontend} from '../micro-frontends/micro-frontend';
import {loadRemoteModule} from '@corpay/module-federation';
import {APP_ROUTES} from '../app.routes';

export function buildRoutes(options: MicroFrontend[]): Routes {

  const lazyRoutes: Routes = options
    .map(o => ({
      path: o.routePath,
      loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName])
    }));

  return [...APP_ROUTES, ...lazyRoutes];
}
