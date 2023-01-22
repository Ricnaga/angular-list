import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DASHBOARD } from 'src/app/application/routes';
import { LocalService } from '../services/storage/local.service';

@Injectable({
  providedIn: 'root',
})
export class OuterGuard implements CanActivate {
  constructor(private localService: LocalService, private router: Router) {}

  canActivate(): boolean {
    if (this.localService.getUser()) {
      this.router.navigate([DASHBOARD]);
      return false;
    }

    return true;
  }
}
