import {LoadRemoteModuleOptions} from '@corpay/module-federation';

export type PluginOptions = LoadRemoteModuleOptions & {
  displayName: string;
  componentName: string;
};
