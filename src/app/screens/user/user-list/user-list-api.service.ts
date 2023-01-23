import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/shared/api.config';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import { UserListType } from './user-list.type';

@Injectable({
  providedIn: 'root',
})
export class UserListApiService {
  private endpoint: string;
  constructor(
    @Inject(API_CONFIG) private baseURL: string,
    private http: HttpClient,
    private snackbarService: SnackbarService,
  ) {
    this.endpoint = `${this.baseURL}/user`;
  }

  getErrors() {
    return catchError<Array<UserListType>, Observable<Array<UserListType>>>(
      (source) => {
        this.snackbarService.openSnackbar(
          'Erro! Não foi possível listar usuários',
        );
        return source;
      },
    );
  }

  get(): Observable<Array<UserListType>> {
    return this.http
      .get<Array<UserListType>>(this.endpoint)
      .pipe(this.getErrors());
  }
}
