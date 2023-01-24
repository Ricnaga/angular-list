import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/shared/api.config';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import {
  ITodoUpdateResponse,
  ITodoUpdateValue,
} from './todo-update-field.type';

@Injectable({
  providedIn: 'root',
})
export class TodoUpdateApiService {
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

  getById(id: string): Observable<ITodoUpdateValue> {
    return this.http
      .get<ITodoUpdateValue>(`${this.endpoint}/${id}`)
      .pipe(
        this.getErrors<ITodoUpdateValue>(
          'Erro! Não foi possível listar esse todo',
        ),
      );
  }

  update(id: string, body: ITodoUpdateValue): Observable<ITodoUpdateResponse> {
    return this.http
      .patch<ITodoUpdateResponse>(`${this.endpoint}/${id}`, body)
      .pipe(
        this.getErrors<ITodoUpdateResponse>(
          'Erro! Não foi possível editar esse todo',
        ),
      );
  }
}
