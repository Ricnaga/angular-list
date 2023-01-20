import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { LOGIN } from 'src/app/application/routes';
import { LocalService } from '../services/storage/local.service';

@Injectable({
  providedIn: 'root',
})
export class InnerGuard implements CanActivate, CanActivateChild {
  constructor(private localService: LocalService, private router: Router) {}

  canActivate(): boolean {
    if (!this.localService.getToken()) {
      this.router.navigate([LOGIN]);
      return false;
    }

    return true;
  }

  canActivateChild(): boolean {
    if (!this.localService.getToken()) {
      this.router.navigate([LOGIN]);
      return false;
    }

    return true;
  }
}
