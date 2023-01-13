import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lab-container',
  template: `<div>
    <ng-content></ng-content>
  </div>`,
  styles: [
    `
      div {
        padding: 2rem;
      }
    `,
  ],
})
export class ContainerComponent {}
