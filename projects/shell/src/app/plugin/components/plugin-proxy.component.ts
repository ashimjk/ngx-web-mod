import {Component, ComponentFactoryResolver, Injector, Input, OnChanges, ViewChild, ViewContainerRef} from '@angular/core';
import {loadRemoteModule} from '@corpay/module-federation';
import {PluginOptions} from '../plugin.model';

@Component({
  selector: 'app-plugin-proxy',
  template: `
    <ng-container #placeHolder></ng-container>
  `
})
export class PluginProxyComponent implements OnChanges {

  // @ts-ignore
  @Input() options: PluginOptions;
  // @ts-ignore
  @ViewChild('placeHolder', {read: ViewContainerRef, static: true}) viewContainer: ViewContainerRef;

  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver) {
  }

  async ngOnChanges(): Promise<void> {
    this.viewContainer.clear();

    const component = await loadRemoteModule(this.options)
      .then(m => m[this.options.componentName]);

    // Ivy --> ViewEngine
    const factory = this.cfr.resolveComponentFactory(component);

    const compRef = this.viewContainer.createComponent(factory, 0, this.injector);
    // const compInstance = compRef.instance;
    // compInstance.a = 'xx'
    // compInstance.onChange.subscribe(...)
    // compInstance.m();

  }

}
