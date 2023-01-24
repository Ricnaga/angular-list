import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/shared/api.config';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import {
  IUserDeleteResponse,
  IUserDeleteGeytByIdResponse,
} from './user-delete.type';

@Injectable({
  providedIn: 'root',
})
export class UserDeleteApiService {
  private endpoint: string;

  constructor(
    @Inject(API_CONFIG) private baseURL: string,
    private http: HttpClient,
    private snackbarService: SnackbarService,
  ) {
    this.endpoint = `${this.baseURL}/user`;
  }

  private getErrors<T>(message: string) {
    return catchError<T, Observable<T>>((source) => {
      this.snackbarService.openSnackbar(message);
      return source;
    });
  }

  getById(id: string): Observable<IUserDeleteGeytByIdResponse> {
    return this.http
      .get<IUserDeleteGeytByIdResponse>(`${this.endpoint}/${id}`)
      .pipe(
        this.getErrors<IUserDeleteGeytByIdResponse>(
          'Erro! Não foi possível listar esse usuário',
        ),
      );
  }

  delete(id: string): Observable<IUserDeleteResponse> {
    return this.http
      .delete<IUserDeleteResponse>(`${this.endpoint}/${id}`)
      .pipe(
        this.getErrors<IUserDeleteResponse>(
          'Erro! Não foi possível remover esse usuário',
        ),
      );
  }
}
