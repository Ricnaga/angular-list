import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBaseApiService } from '../user-base-api.service';
import { IUserValue } from '../user.type';

type IUserDeleteResponse = Record<'id', string>;

@Injectable({
  providedIn: 'root',
})
export class UserDeleteApiService extends UserBaseApiService {
  getById(id: string): Observable<IUserValue> {
    return this.http
      .get<IUserValue>(`${this.endpoint}/${id}`)
      .pipe(
        this.getErrors<IUserValue>(
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
