import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class UserCreateValidationService {
  constructor(private snackbarService: SnackbarService) {}

  getValidations(form: FormGroup): boolean {
    if (form.untouched) {
      this.snackbarService.openSnackbar('ERRO! Os dados não foram informados');
      return true;
    }
    if (form.invalid) {
      this.snackbarService.openSnackbar('ERRO! Campo pendente');
      return true;
    }

    return false;
  }
}
