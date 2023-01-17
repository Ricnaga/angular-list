import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lab-todo',
  template: `
    <lab-page-header [title]="title"></lab-page-header>
    <router-outlet></router-outlet>
  `,
})
export class TodoComponent {
  title: string;

  constructor(private router: Router) {
    this.title = 'To Do';
  }

  onBack() {
    this.router.navigate(['']);
  }
}
