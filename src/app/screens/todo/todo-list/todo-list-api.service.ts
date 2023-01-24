import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/shared/api.config';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import { TodoListType } from './todo-list.type';

@Injectable({
  providedIn: 'root',
})
export class TodoListApiService {
  private endpoint: string;
  constructor(
    @Inject(API_CONFIG) private baseURL: string,
    private http: HttpClient,
    private snackbarService: SnackbarService,
  ) {
    this.endpoint = `${this.baseURL}/todo`;
  }

  getErrors() {
    return catchError<Array<TodoListType>, Observable<Array<TodoListType>>>(
      (source) => {
        this.snackbarService.openSnackbar(
          'Erro! Não foi possível listar todos',
        );
        return source;
      },
    );
  }

  get(): Observable<Array<TodoListType>> {
    return this.http
      .get<Array<TodoListType>>(this.endpoint)
      .pipe(this.getErrors());
  }
}
