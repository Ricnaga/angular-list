import { Injectable } from '@angular/core';
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
  getToken(): string | null {
    return this.session.getItem(this.key);
  }
  setToken(token: string): void {
    this.session.setItem(this.key, token);
  }
  removeToken(): void {
    this.session.removeItem(this.key);
  }
  clearTokens(): void {
    this.session.clear();
  }
}
