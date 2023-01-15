import { RouterModule, Routes } from '@angular/router';
import { TODO, USERS } from './application/routes';

const routes: Routes = [
  {
    path: USERS,
    loadChildren: () =>
      import('./screens/user/user.module').then((m) => m.UserModule),
  },
  {
    path: TODO,
    loadChildren: () =>
      import('./screens/todo/todo.module').then((m) => m.TodoModule),
  },
];

export const APP_ROUTING = RouterModule.forRoot(routes);
