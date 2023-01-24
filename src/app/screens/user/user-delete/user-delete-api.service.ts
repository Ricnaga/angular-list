import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBaseApiService } from '../user-base-api.service';
import {
  IUserDeleteGeytByIdResponse,
  IUserDeleteResponse,
} from './user-delete.type';

@Injectable({
  providedIn: 'root',
})
export class UserDeleteApiService extends UserBaseApiService {
  getById(id: string): Observable<IUserDeleteGeytByIdResponse> {
    return this.http
      .get<IUserDeleteGeytByIdResponse>(`${this.endpoint}/${id}`)
      .pipe(
        this.getErrors<IUserDeleteGeytByIdResponse>(
          'Erro! Não foi possível listar esse usuário',
        ),
      );
  }

  delete(id: string): Observable<IUserDeleteResponse> {
    return this.http
      .delete<IUserDeleteResponse>(`${this.endpoint}/${id}`)
      .pipe(
        this.getErrors<IUserDeleteResponse>(
          'Erro! Não foi possível remover esse usuário',
        ),
      );
  }
}
