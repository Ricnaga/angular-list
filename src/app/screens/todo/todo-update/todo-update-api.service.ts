import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoBaseApiService } from '../todo-base-api.service';
import {
  ITodoUpdateResponse,
  ITodoUpdateValue,
} from './todo-update-field.type';

@Injectable({
  providedIn: 'root',
})
export class TodoUpdateApiService extends TodoBaseApiService {
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
