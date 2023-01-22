import { Injectable } from '@angular/core';
import { User } from './base-storage.interface';
import { BaseStorageService } from './base-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LocalService extends BaseStorageService {
  protected local: Storage;

  constructor() {
    super();
    this.local = localStorage;
  }

  getUser(): User | null {
    const user = this.local.getItem(this.key);

    return user ? JSON.parse(user) : null;
  }

  setUser(params: User): void {
    this.local.setItem(this.key, JSON.stringify(params));
  }
  removeUser(): void {
    this.local.removeItem(this.key);
  }
  clearUser(): void {
    this.local.clear();
  }
}
