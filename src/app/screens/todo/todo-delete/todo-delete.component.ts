import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDeleteType } from './todo-delete.type';

@Component({
  selector: 'lab-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.scss'],
})
export class TodoDeleteComponent {
  user: Array<TodoDeleteType> = [
    { title: 'ID', description: '3' },
    { title: 'Título', description: 'Valter' },
    { title: 'Descrição', description: 'Escaminosflau' },
    { title: 'Observações', description: '35' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  onCancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
