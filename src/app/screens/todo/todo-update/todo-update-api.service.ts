import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoBaseApiService } from '../todo-base-api.service';
import { ITodo } from '../todo.type';

type ITodoUpdateResponse = Record<'id', string>;

@Injectable({
  providedIn: 'root',
})
export class TodoUpdateApiService extends TodoBaseApiService {
  getById(id: string): Observable<ITodo> {
    return this.http
      .get<ITodo>(`${this.endpoint}/${id}`)
      .pipe(this.getErrors<ITodo>('Erro! Não foi possível listar esse todo'));
  }

  update(id: string, body: ITodo): Observable<ITodoUpdateResponse> {
    return this.http
      .patch<ITodoUpdateResponse>(`${this.endpoint}/${id}`, body)
      .pipe(
        this.getErrors<ITodoUpdateResponse>(
          'Erro! Não foi possível editar esse todo',
        ),
      );
  }
}
