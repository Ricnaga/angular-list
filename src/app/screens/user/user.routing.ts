import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
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
        component: UserListComponent,
      },
      {
        path: USER_PATH.create,
        component: UserCreateComponent,
      },
      {
        path: USER_PATH.update,
        component: UserUpdateComponent,
      },
      {
        path: USER_PATH.delete,
        component: UserDeleteComponent,
      },
    ],
  },
];

export const USER_ROUTING = RouterModule.forChild(routes);
