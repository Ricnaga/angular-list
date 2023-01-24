import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBaseApiService } from '../../user-base-api.service';
import {
  IUserCreateResponse,
  IUserCreateValue,
} from '../user-create-field.type';

@Injectable({
  providedIn: 'root',
})
export class UserCreateApiService extends UserBaseApiService {
  post(body: IUserCreateValue): Observable<IUserCreateResponse> {
    return this.http
      .post<IUserCreateResponse>(this.endpoint, body)
      .pipe(this.getErrors('Erro! Não foi possível criar usuário'));
  }
}
