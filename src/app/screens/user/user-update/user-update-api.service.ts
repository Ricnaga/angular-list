import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/shared/api.config';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import {
  IUserUpdateResponse,
  IUserUpdateValue,
} from './user-update-field.type';

@Injectable({
  providedIn: 'root',
})
export class UserUpdateApiService {
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

  getById(id: string): Observable<IUserUpdateValue> {
    return this.http
      .get<IUserUpdateValue>(`${this.endpoint}/${id}`)
      .pipe(
        this.getErrors<IUserUpdateValue>(
          'Erro! Não foi possível listar esse usuário',
        ),
      );
  }

  update(id: string, body: IUserUpdateValue): Observable<IUserUpdateResponse> {
    return this.http
      .patch<IUserUpdateResponse>(`${this.endpoint}/${id}`, body)
      .pipe(
        this.getErrors<IUserUpdateResponse>(
          'Erro! Não foi possível editar esse usuário',
        ),
      );
  }
}
