import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    this.loginApiService.post(this.value);

    this.isButtonLoading = !this.isButtonLoading;
  }
}
