import { InjectionToken } from '@angular/core';

export enum APIConfig {
  baseURL = 'http://localhost:3333',
}

export const API_CONFIG = new InjectionToken<string>('API_CONFIG');
