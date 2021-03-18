import {LoadRemoteModuleOptions} from '@corpay/module-federation';

export type MicroFrontend = LoadRemoteModuleOptions & {
  displayName: string;
  routePath: string;
  ngModuleName: string;
};
