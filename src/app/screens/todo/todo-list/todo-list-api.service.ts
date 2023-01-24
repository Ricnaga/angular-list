import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoBaseApiService } from '../todo-base-api.service';
import { TodoListType } from './todo-list.type';

@Injectable({
  providedIn: 'root',
})
export class TodoListApiService extends TodoBaseApiService {
  get(): Observable<Array<TodoListType>> {
    return this.http
      .get<Array<TodoListType>>(this.endpoint)
      .pipe(this.getErrors('Erro! Não foi possível listar todos'));
  }
}
