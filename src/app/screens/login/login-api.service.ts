import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/shared/api.config';
import { ILoginResponse, ILoginValue } from './login.type';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  private endpoint: string;

  constructor(
    @Inject(API_CONFIG) private baseURL: string,
    private http: HttpClient,
  ) {
    this.endpoint = `${this.baseURL}/login`;
  }

  post(body: ILoginValue): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(this.endpoint, body);
  }
}
