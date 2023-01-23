import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { BackdropService } from '../components/backdrop/backdrop.service';

@Injectable()
export class BackdropInterceptor implements HttpInterceptor {
  constructor(private backdropService: BackdropService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    this.backdropService.handleBackdrop(true);
    return next
      .handle(request)
      .pipe(finalize(() => this.backdropService.handleBackdrop(false)));
  }
}
