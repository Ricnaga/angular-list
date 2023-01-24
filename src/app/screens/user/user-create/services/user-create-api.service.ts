import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBaseApiService } from '../../user-base-api.service';
import { IUserValue } from '../../user.type';

type IUserCreateResponse = Record<'id', string>;

@Injectable({
  providedIn: 'root',
})
export class UserCreateApiService extends UserBaseApiService {
  post(body: IUserValue): Observable<IUserCreateResponse> {
    return this.http
      .post<IUserCreateResponse>(this.endpoint, body)
      .pipe(this.getErrors('Erro! Não foi possível criar usuário'));
  }
}
