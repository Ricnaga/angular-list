import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/shared/api.config';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import {
  IUserCreateResponse,
  IUserCreateValue,
} from '../user-create-field.type';

@Injectable({
  providedIn: 'root',
})
export class UserCreateApiService {
  private endpoint: string;

  constructor(
    @Inject(API_CONFIG) private baseURL: string,
    private http: HttpClient,
    private snackbarService: SnackbarService,
  ) {
    this.endpoint = `${this.baseURL}/user`;
  }

  private getErrors() {
    return catchError<IUserCreateResponse, Observable<IUserCreateResponse>>(
      (source) => {
        this.snackbarService.openSnackbar(
          'Erro! Não foi possível criar usuário',
        );
        return source;
      },
    );
  }

  post(body: IUserCreateValue): Observable<IUserCreateResponse> {
    return this.http
      .post<IUserCreateResponse>(this.endpoint, body)
      .pipe(this.getErrors());
  }
}
