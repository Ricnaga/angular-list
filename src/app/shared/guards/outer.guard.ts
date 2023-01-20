import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DASHBOARD, LOGIN } from 'src/app/application/routes';
import { LocalService } from '../services/storage/local.service';

@Injectable({
  providedIn: 'root',
})
export class OuterGuard implements CanActivate {
  constructor(private localService: LocalService, private router: Router) {}

  canActivate(): boolean {
    if (this.localService.getToken()) {
      this.router.navigate([DASHBOARD]);
      return false;
    }

    return true;
  }
}
