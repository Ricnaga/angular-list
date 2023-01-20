import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

const DURATION = 5000;

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackbar(message: string) {
    this.snackBar.open(message, 'X', {
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      duration: DURATION,
    });
  }
}
