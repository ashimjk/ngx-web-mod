import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PluginContainerComponent} from './components/plugin-container.component';
import {PluginProxyComponent} from './components/plugin-proxy.component';
import {PluginConfigComponent} from './components/plugin-config.component';
import {RouterModule} from '@angular/router';
import {PluginLookupService} from './plugin-lookup.service';


@NgModule({
  declarations: [
    PluginContainerComponent,
    PluginProxyComponent,
    PluginConfigComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: PluginContainerComponent}
    ])
  ],
  providers: [
    PluginLookupService
  ]
})
export class PluginModule {
}
