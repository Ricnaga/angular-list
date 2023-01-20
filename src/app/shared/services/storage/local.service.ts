import { Injectable } from '@angular/core';
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
  getToken(): string | null {
    return this.local.getItem(this.key);
  }
  setToken(token: string): void {
    this.local.setItem(this.key, token);
  }
  removeToken(): void {
    this.local.removeItem(this.key);
  }
  clearTokens(): void {
    this.local.clear();
  }
}
