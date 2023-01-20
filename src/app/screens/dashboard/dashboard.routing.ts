import { RouterModule, Routes } from '@angular/router';
import { TODO, USERS } from 'src/app/application/routes';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: USERS,
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
      },
      {
        path: TODO,
        loadChildren: () =>
          import('../todo/todo.module').then((m) => m.TodoModule),
      },
    ],
  },
];

export const DASHBOARD_ROUTING = RouterModule.forChild(routes);
