import { Component } from '@angular/core';

@Component({
  selector: 'lab-root',
  template: `<router-outlet></router-outlet>
    <lab-backdrop *ngIf="false"></lab-backdrop>`,
})
export class AppComponent {}
