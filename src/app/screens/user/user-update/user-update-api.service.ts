import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBaseApiService } from '../user-base-api.service';
import {
  IUserUpdateResponse,
  IUserUpdateValue,
} from './user-update-field.type';

@Injectable({
  providedIn: 'root',
})
export class UserUpdateApiService extends UserBaseApiService {
  getById(id: string): Observable<IUserUpdateValue> {
    return this.http
      .get<IUserUpdateValue>(`${this.endpoint}/${id}`)
      .pipe(
        this.getErrors<IUserUpdateValue>(
          'Erro! Não foi possível listar esse usuário',
        ),
      );
  }

  update(id: string, body: IUserUpdateValue): Observable<IUserUpdateResponse> {
    return this.http
      .patch<IUserUpdateResponse>(`${this.endpoint}/${id}`, body)
      .pipe(
        this.getErrors<IUserUpdateResponse>(
          'Erro! Não foi possível editar esse usuário',
        ),
      );
  }
}
