import {Injectable} from '@angular/core';
import {MicroFrontend} from './micro-frontend';

@Injectable({providedIn: 'root'})
export class LookupService {
  lookup(): Promise<MicroFrontend[]> {
    return Promise.resolve([
      {
        // For Loading
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Module',

        // For Routing
        displayName: 'Flights',
        routePath: 'flights',
        ngModuleName: 'FlightsModule'
      }
    ] as MicroFrontend[]);
  }
}
