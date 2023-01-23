import { Component } from '@angular/core';

@Component({
  selector: 'lab-root',
  template: `<router-outlet></router-outlet> <lab-backdrop></lab-backdrop>`,
})
export class AppComponent {}
