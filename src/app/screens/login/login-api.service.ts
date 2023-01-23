import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DASHBOARD } from 'src/app/application/routes';
import { API_CONFIG } from 'src/app/shared/api.config';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import { LocalService } from 'src/app/shared/services/storage/local.service';
import { ILoginResponse, ILoginValue } from './login.type';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  private endpoint: string;

  constructor(
    @Inject(API_CONFIG) private baseURL: string,
    private http: HttpClient,
    private localService: LocalService,
    private router: Router,
    private snackbarService: SnackbarService,
  ) {
    this.endpoint = `${this.baseURL}/login`;
  }

  post(body: ILoginValue) {
    this.http.post<ILoginResponse>(this.endpoint, body).subscribe({
      next: ({ accessToken }) => {
        this.localService.setUser({
          token: accessToken,
          name: 'Ricardo Naga',
          userName: 'ricardo.dev',
        });
        this.router.navigate([DASHBOARD]);
      },
      error: () =>
        this.snackbarService.openSnackbar('Erro! Serviço indisponível'),
    });
  }
}
