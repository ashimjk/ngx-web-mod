import {Component, ComponentFactoryResolver, Inject, Injector, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css']
})
export class FlightsSearchComponent implements OnInit {

  @ViewChild('vc', {read: ViewContainerRef, static: true}) viewContainer: ViewContainerRef | undefined;

  user = 'Ashim';

  // user = this.service.user;

  constructor(
    // private service: AuthLibService,
    private translateService: TranslateService,
    @Inject(Injector) private injector: Injector,
    @Inject(ComponentFactoryResolver) private cfr: ComponentFactoryResolver) {

  }

  ngOnInit(): void {
    console.log('default lang', this.translateService.defaultLang);
  }

  search(): void {
    alert('Not implemented for this demo!');
  }

  terms(): void {
    import('../lazy/lazy.component')
      .then(m => m.LazyComponent)
      .then(comp => {
        const factory = this.cfr.resolveComponentFactory(comp);
        // @ts-ignore
        this.viewContainer.createComponent(factory, null, this.injector);
      });

  }

}
