import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

export const USER_PATH = {
  list: '',
  create: 'create',
  update: 'update/:id',
  delete: 'delete/:id',
};

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: USER_PATH.list,
        loadComponent: () =>
          import('./user-list/user-list.component').then(
            (c) => c.UserListComponent,
          ),
      },
      {
        path: USER_PATH.create,
        loadComponent: () =>
          import('./user-create/user-create.component').then(
            (c) => c.UserCreateComponent,
          ),
      },
      {
        path: USER_PATH.update,
        loadComponent: () =>
          import('./user-update/user-update.component').then(
            (c) => c.UserUpdateComponent,
          ),
      },
      {
        path: USER_PATH.delete,
        loadComponent: () =>
          import('./user-delete/user-delete.component').then(
            (c) => c.UserDeleteComponent,
          ),
      },
    ],
  },
];

export const USER_ROUTING = RouterModule.forChild(routes);
