import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/shared/api.config';
import { UserListType } from './user-list.type';

@Injectable({
  providedIn: 'root',
})
export class UserListApiService {
  private endpoint: string;
  constructor(
    @Inject(API_CONFIG) private baseURL: string,
    private http: HttpClient,
  ) {
    this.endpoint = `${this.baseURL}/user`;
  }

  get(): Observable<Array<UserListType>> {
    return this.http.get<Array<UserListType>>(this.endpoint);
  }
}
