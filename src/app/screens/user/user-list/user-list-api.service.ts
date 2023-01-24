import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBaseApiService } from '../user-base-api.service';
import { UserListType } from './user-list.type';

@Injectable({
  providedIn: 'root',
})
export class UserListApiService extends UserBaseApiService {
  get(): Observable<Array<UserListType>> {
    return this.http
      .get<Array<UserListType>>(this.endpoint)
      .pipe(this.getErrors('Erro! não foi possível istar usuários'));
  }
}
