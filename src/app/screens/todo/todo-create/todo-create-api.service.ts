import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/shared/api.config';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import { TodoCreateResponse, TodoCreateValues } from './todo-create-field.enum';

@Injectable({
  providedIn: 'root',
})
export class TodoCreateApiService {
  private endpoint: string;
  constructor(
    @Inject(API_CONFIG) private baseURL: string,
    private http: HttpClient,
    private snackbarService: SnackbarService,
  ) {
    this.endpoint = `${this.baseURL}/todo`;
  }

  getErrors() {
    return catchError<TodoCreateResponse, Observable<TodoCreateResponse>>(
      (source) => {
        this.snackbarService.openSnackbar(
          'Erro! Não foi possível criar esse todo',
        );
        return source;
      },
    );
  }

  post(body: TodoCreateValues): Observable<TodoCreateResponse> {
    return this.http
      .post<TodoCreateResponse>(this.endpoint, body)
      .pipe(this.getErrors());
  }
}
