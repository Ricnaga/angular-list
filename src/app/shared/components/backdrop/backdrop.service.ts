import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackdropService {
  private requests: number;
  isLoading$: BehaviorSubject<boolean>;

  constructor() {
    this.requests = 0;
    this.isLoading$ = new BehaviorSubject(false);
  }

  handleBackdrop(hasRequest: boolean) {
    this.requests = hasRequest ? ++this.requests : --this.requests;

    this.isLoading$.next(!!this.requests);
  }
}
