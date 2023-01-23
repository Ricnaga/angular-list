import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { LOGIN } from 'src/app/application/routes';
import { LocalService } from '../services/storage/local.service';

@Injectable({
  providedIn: 'root',
})
export class InnerGuard implements CanActivate, CanActivateChild {
  constructor(private localService: LocalService, private router: Router) {}

  getCredential(): boolean {
    if (!this.localService.getUser()) {
      this.router.navigate([LOGIN]);
      return false;
    }

    return true;
  }

  canActivate(): boolean {
    return this.getCredential();
  }

  canActivateChild(): boolean {
    return this.getCredential();
  }
}
