import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    <div class="version">Version {{ version }}</div>
  `,
  styles: [
      `
      .version {
        position: absolute;
        top: 5px;
        left: 5px;
      }
    `
  ]
})
export class AppComponent {
  version: string;

  constructor() {
    this.version = require('../../package.json').version;
  }
}
