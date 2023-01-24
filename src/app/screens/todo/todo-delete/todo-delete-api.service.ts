import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/shared/api.config';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import {
  ITodoDeleteGeytByIdResponse,
  ITodoDeleteResponse,
} from './todo-delete.type';

@Injectable({
  providedIn: 'root',
})
export class TodoDeleteApiService {
  private endpoint: string;

  constructor(
    @Inject(API_CONFIG) private baseURL: string,
    private http: HttpClient,
    private snackbarService: SnackbarService,
  ) {
    this.endpoint = `${this.baseURL}/todo`;
  }

  private getErrors<T>(message: string) {
    return catchError<T, Observable<T>>((source) => {
      this.snackbarService.openSnackbar(message);
      return source;
    });
  }

  getById(id: string): Observable<ITodoDeleteGeytByIdResponse> {
    return this.http
      .get<ITodoDeleteGeytByIdResponse>(`${this.endpoint}/${id}`)
      .pipe(
        this.getErrors<ITodoDeleteGeytByIdResponse>(
          'Erro! Não foi possível listar esse todo',
        ),
      );
  }

  delete(id: string): Observable<ITodoDeleteResponse> {
    return this.http
      .delete<ITodoDeleteResponse>(`${this.endpoint}/${id}`)
      .pipe(
        this.getErrors<ITodoDeleteResponse>(
          'Erro! Não foi possível remover esse todo',
        ),
      );
  }
}
