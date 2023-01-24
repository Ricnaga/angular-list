import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoBaseApiService } from '../todo-base-api.service';
import {
  ITodoDeleteGeytByIdResponse,
  ITodoDeleteResponse,
} from './todo-delete.type';

@Injectable({
  providedIn: 'root',
})
export class TodoDeleteApiService extends TodoBaseApiService {
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
