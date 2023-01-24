import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoBaseApiService } from '../todo-base-api.service';
import { ITodo } from '../todo.type';

type TodoCreateResponse = Record<'id', string>;

@Injectable({
  providedIn: 'root',
})
export class TodoCreateApiService extends TodoBaseApiService {
  post(body: ITodo): Observable<TodoCreateResponse> {
    return this.http
      .post<TodoCreateResponse>(this.endpoint, body)
      .pipe(this.getErrors('Erro! Não foi possível criar esse todo'));
  }
}
