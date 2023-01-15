import { Component } from '@angular/core';

@Component({
  template: `
    <lab-page-header [title]="title"></lab-page-header>
    <router-outlet></router-outlet>
  `,
})
export class UserComponent {
  title: string;

  constructor() {
    this.title = 'Usuários';
  }
}
