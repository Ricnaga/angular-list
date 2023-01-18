import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDeleteType } from './todo-delete.type';

@Component({
  selector: 'lab-todo-delete',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatListModule],
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
