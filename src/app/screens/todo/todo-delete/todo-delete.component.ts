import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TODO } from 'src/app/application/routes';
import { TodoDeleteApiService } from './todo-delete-api.service';
import { TodoDeleteType } from './todo-delete.type';

@Component({
  selector: 'lab-todo-delete',
  templateUrl: './todo-delete.component.html',
})
export class TodoDeleteComponent implements OnInit {
  paramId = this.route.snapshot.paramMap.get('id') ?? '';

  user: Array<TodoDeleteType> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoDeleteApiService: TodoDeleteApiService,
  ) {}

  ngOnInit(): void {
    this.todoDeleteApiService.getById(this.paramId).subscribe((response) => {
      this.user = [
        { title: 'ID', description: this.paramId },
        { title: 'Título', description: response.title },
        { title: 'Descrição', description: response.description },
        { title: 'Observações', description: response.remarks },
      ];
    });
  }

  onCancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  onDelete() {
    this.todoDeleteApiService
      .delete(this.paramId)
      .subscribe(() => this.router.navigate([TODO]));
  }
}
