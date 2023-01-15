import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lab-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
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
