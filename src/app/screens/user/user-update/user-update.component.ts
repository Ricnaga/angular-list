import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { USERS } from 'src/app/application/routes';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { UserUpdateApiService } from './user-update-api.service';
import { UserUpdateFieldEnum } from './user-update-field.enum';
import { IUserUpdateField, IUserUpdateValue } from './user-update-field.type';

@Component({
  selector: 'lab-user-update',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent implements OnInit {
  form!: FormGroup;
  fields: Array<IUserUpdateField>;
  values!: IUserUpdateValue;
  paramId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userUpdateApiService: UserUpdateApiService,
  ) {
    this.paramId = this.route.snapshot.paramMap.get('id') ?? '';
    this.fields = [
      {
        label: 'First Name',
        placeholder: 'Insert a first name',
        formControlName: UserUpdateFieldEnum.FIRSTNAME,
      },
      {
        label: 'Last Name',
        placeholder: 'Insert a last name',
        formControlName: UserUpdateFieldEnum.LASTNAME,
      },
      {
        label: 'Age',
        placeholder: 'Insert an Age',
        formControlName: UserUpdateFieldEnum.AGE,
      },
    ];
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [UserUpdateFieldEnum.FIRSTNAME]: [''],
      [UserUpdateFieldEnum.LASTNAME]: [''],
      [UserUpdateFieldEnum.AGE]: [''],
    });
    this.userUpdateApiService
      .getById(this.paramId)
      .subscribe((response) => this.form.patchValue(response));
  }

  onCancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  onSubmit() {
    this.values = Object.assign({}, this.form.value);
    this.userUpdateApiService
      .update(this.paramId, this.values)
      .subscribe(() => this.router.navigate([USERS]));
  }
}
