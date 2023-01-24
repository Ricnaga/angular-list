import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBaseApiService } from '../user-base-api.service';
import { IUserValue } from '../user.type';

type IUserUpdateResponse = Record<'id', string>;

@Injectable({
  providedIn: 'root',
})
export class UserUpdateApiService extends UserBaseApiService {
  getById(id: string): Observable<IUserValue> {
    return this.http
      .get<IUserValue>(`${this.endpoint}/${id}`)
      .pipe(
        this.getErrors<IUserValue>(
          'Erro! Não foi possível listar esse usuário',
        ),
      );
  }

  update(id: string, body: IUserValue): Observable<IUserUpdateResponse> {
    return this.http
      .patch<IUserUpdateResponse>(`${this.endpoint}/${id}`, body)
      .pipe(
        this.getErrors<IUserUpdateResponse>(
          'Erro! Não foi possível editar esse usuário',
        ),
      );
  }
}
