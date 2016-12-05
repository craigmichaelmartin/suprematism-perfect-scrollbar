import { Component } from '@angular/core';

declare var require: any;

@Component({
  selector: 'supre-root',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent {}
