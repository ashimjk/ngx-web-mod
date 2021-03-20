import {Component, OnInit} from '@angular/core';
import {PluginOptions} from '../plugin.model';
import {PluginLookupService} from '../plugin-lookup.service';

@Component({
  selector: 'app-plugin-container',
  template: `
    <ul>
      <li><img src="../../../assets/angular.png" width="50"></li>
      <li><a href="#">Plugin-based Workflow Designer</a></li>
      <li><a (click)="toggle()">Toggle Config</a></li>
    </ul>

    <div class="vertical-menu">
      <a href="#" class="active">Tasks</a>
      <a *ngFor="let p of plugins" (click)="add(p)">Add {{p.displayName}}</a>
    </div>

    <ng-container *ngFor="let p of workflow; let last = last">
      <app-plugin-proxy [options]="p"></app-plugin-proxy>
      <i *ngIf="!last" class="arrow right" style=""></i>
    </ng-container>

    <p style="clear:both">&nbsp;</p>
    <p>&nbsp;</p>
    <app-plugin-config *ngIf="showConfig"></app-plugin-config>
  `
})
export class PluginContainerComponent implements OnInit {

  plugins: PluginOptions[] = [];
  workflow: PluginOptions[] = [];
  showConfig = false;

  constructor(
    private pluginLookupService: PluginLookupService) {
  }

  async ngOnInit(): Promise<void> {
    this.plugins = await this.pluginLookupService.lookup();
  }

  add(plugin: PluginOptions): void {
    this.workflow.push(plugin);
  }

  toggle(): void {
    this.showConfig = !this.showConfig;
  }

}
