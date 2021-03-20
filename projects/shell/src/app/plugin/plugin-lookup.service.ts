import {PluginOptions} from './plugin.model';

export class PluginLookupService {
  lookup(): Promise<PluginOptions[]> {
    return Promise.resolve([
      // {
      //   remoteEntry: 'http://localhost:3000/remoteEntry.js',
      //   remoteName: 'mfe1',
      //   exposedModule: './Download',
      //
      //   displayName: 'Download',
      //   componentName: 'DownloadComponent'
      // },
      // {
      //   remoteEntry: 'http://localhost:3000/remoteEntry.js',
      //   remoteName: 'mfe1',
      //   exposedModule: './Upload',
      //
      //   displayName: 'Upload',
      //   componentName: 'UploadComponent'
      // },
      // {
      //   remoteEntry: 'http://localhost:3001/remoteEntry.js',
      //   remoteName: 'mfe2',
      //   exposedModule: './Analyze',
      //
      //   displayName: 'Analyze',
      //   componentName: 'AnalyzeComponent'
      // },
      // {
      //   remoteEntry: 'http://localhost:3001/remoteEntry.js',
      //   remoteName: 'mfe2',
      //   exposedModule: './Enrich',
      //
      //   displayName: 'Enrich',
      //   componentName: 'EnrichComponent'
      // }
    ] as PluginOptions[]);
  }

}
