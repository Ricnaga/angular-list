import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/shared/api.config';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class TodoBaseApiService {
  protected endpoint: string;

  constructor(
    @Inject(API_CONFIG) private baseURL: string,
    protected http: HttpClient,
    private snackbarService: SnackbarService,
  ) {
    this.endpoint = `${this.baseURL}/todo`;
  }

  protected getErrors<T>(message: string) {
    return catchError<T, Observable<T>>((source) => {
      this.snackbarService.openSnackbar(message);
      return source;
    });
  }
}
