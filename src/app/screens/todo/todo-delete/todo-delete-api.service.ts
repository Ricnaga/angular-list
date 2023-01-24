import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoBaseApiService } from '../todo-base-api.service';
import { ITodo } from '../todo.type';

type ITodoDeleteResponse = Record<'id', string>;

@Injectable({
  providedIn: 'root',
})
export class TodoDeleteApiService extends TodoBaseApiService {
  getById(id: string): Observable<ITodo> {
    return this.http
      .get<ITodo>(`${this.endpoint}/${id}`)
      .pipe(this.getErrors<ITodo>('Erro! Não foi possível listar esse todo'));
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
