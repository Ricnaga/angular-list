import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';

export const TODO_PATH = {
  list: '',
  create: 'create',
  update: 'update/:id',
  delete: 'delete/:id',
};

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    children: [
      {
        path: TODO_PATH.list,
        loadChildren: () =>
          import('./todo-list/todo-list.module').then((m) => m.TodoListModule),
      },
      {
        path: TODO_PATH.create,
        loadChildren: () =>
          import('./todo-create/todo-create.module').then(
            (m) => m.TodoCreateModule,
          ),
      },
      {
        path: TODO_PATH.update,
        loadChildren: () =>
          import('./todo-update/todo-update.module').then(
            (m) => m.TodoUpdateModule,
          ),
      },
      {
        path: TODO_PATH.delete,
        loadChildren: () =>
          import('./todo-delete/todo-delete.module').then(
            (m) => m.TodoDeleteModule,
          ),
      },
    ],
  },
];

export const TODO_ROUTING = RouterModule.forChild(routes);
