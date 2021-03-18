import {Component, OnInit} from '@angular/core';
import {MicroFrontend} from '../micro-frontends/micro-frontend';
import {LookupService} from '../micro-frontends/lookup.service';

@Component({
  selector: 'app-config',
  template: `
    <h1>Config</h1>

    <pre style="font-size:20px">{{ config | json }}</pre>
  `
})
export class ConfigComponent implements OnInit {

  constructor(private lookupService: LookupService) {
  }

  config: MicroFrontend[] = [];

  async ngOnInit(): Promise<void> {
    this.config = await this.lookupService.lookup();
  }

}
