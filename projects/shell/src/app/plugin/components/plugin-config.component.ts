import {Component, OnInit} from '@angular/core';
import {PluginLookupService} from '../plugin-lookup.service';
import {PluginOptions} from '../plugin.model';

@Component({
  selector: 'app-plugin-config',
  template: `
    <h3>Plugin Config</h3>

    <pre>{{ pluginConfig | json }}</pre>
  `
})
export class PluginConfigComponent implements OnInit {

  constructor(private pluginLookupService: PluginLookupService) {
  }

  pluginConfig: PluginOptions[] = [];

  async ngOnInit(): Promise<void> {
    this.pluginConfig = await this.pluginLookupService.lookup();
  }

}
