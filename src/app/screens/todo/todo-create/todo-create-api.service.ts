import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoBaseApiService } from '../todo-base-api.service';
import { TodoCreateResponse, TodoCreateValues } from './todo-create-field.enum';

@Injectable({
  providedIn: 'root',
})
export class TodoCreateApiService extends TodoBaseApiService {
  post(body: TodoCreateValues): Observable<TodoCreateResponse> {
    return this.http
      .post<TodoCreateResponse>(this.endpoint, body)
      .pipe(this.getErrors('Erro! Não foi possível criar esse todo'));
  }
}
