import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DASHBOARD } from 'src/app/application/routes';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import { LocalService } from 'src/app/shared/services/storage/local.service';
import { LoginApiService } from './login-api.service';
import { LoginEnum } from './login.enum';
import { ILoginValue } from './login.type';

@Component({
  selector: 'lab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isButtonLoading: boolean;
  form: FormGroup;
  value: ILoginValue;

  constructor(
    private formBuilder: FormBuilder,
    private loginApiService: LoginApiService,
    private localService: LocalService,
    private router: Router,
    private snackbarService: SnackbarService,
  ) {
    this.value = { password: '', email: '' };
    this.form = new FormGroup({});
    this.isButtonLoading = false;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [LoginEnum.EMAIL]: [''],
      [LoginEnum.PASSWORD]: [''],
    });
  }

  onSubmit() {
    this.isButtonLoading = !this.isButtonLoading;

    this.value = Object.assign({}, this.form.value);
    this.loginApiService.post(this.value).subscribe({
      next: ({ accessToken }) => {
        this.localService.setUser({
          token: accessToken,
          name: 'Mock Dev',
          userName: 'mocked.dev',
        });
        this.router.navigate([DASHBOARD]);
      },
      error: () =>
        this.snackbarService.openSnackbar('Erro! Serviço indisponível'),
    });

    this.isButtonLoading = !this.isButtonLoading;
  }
}
