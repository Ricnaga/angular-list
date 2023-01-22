import { Injectable } from '@angular/core';
import { User } from './base-storage.interface';
import { BaseStorageService } from './base-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService extends BaseStorageService {
  protected session: Storage;

  constructor() {
    super();
    this.session = sessionStorage;
  }
  getUser(): User | null {
    const user = this.session.getItem(this.key);

    return user ? JSON.parse(user) : null;
  }
  setUser(params: User): void {
    this.session.setItem(this.key, JSON.stringify(params));
  }
  removeUser(): void {
    this.session.removeItem(this.key);
  }
  clearUser(): void {
    this.session.clear();
  }
}
