import {PluginOptions} from './plugin.model';

export class PluginLookupService {
  lookup(): Promise<PluginOptions[]> {
    return Promise.resolve([
      {
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Download',

        displayName: 'Download',
        componentName: 'DownloadComponent'
      },
      {
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Upload',

        displayName: 'Upload',
        componentName: 'UploadComponent'
      }
    ] as PluginOptions[]);
  }

}
