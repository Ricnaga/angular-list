import { RouterModule, Routes } from '@angular/router';
import { DASHBOARD, LOGIN } from './application/routes';
import { InnerGuard } from './shared/guards/inner.guard';
import { OuterGuard } from './shared/guards/outer.guard';

const routes: Routes = [
  {
    path: DASHBOARD,
    loadChildren: () =>
      import('./screens/dashboard/dashboard.module').then(
        (m) => m.DashboardModule,
      ),
    canActivate: [InnerGuard],
    canActivateChild: [InnerGuard],
  },
  {
    path: LOGIN,
    loadChildren: () =>
      import('./screens/login/login.module').then((m) => m.LoginModule),
    canActivate: [OuterGuard],
  },
];

export const APP_ROUTING = RouterModule.forRoot(routes, { useHash: true });
