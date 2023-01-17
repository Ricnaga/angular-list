import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.fields = [
      {
        label: 'Nome',
        placeholder: 'Informe o nome',
        formControlName: UserUpdateFieldEnum.NOME,
      },
      {
        label: 'Sobrenome',
        placeholder: 'Informe o sobrenome',
        formControlName: UserUpdateFieldEnum.SOBRENOME,
      },
      {
        label: 'Idade',
        placeholder: 'Informe a idade',
        formControlName: UserUpdateFieldEnum.IDADE,
      },
    ];
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [UserUpdateFieldEnum.NOME]: [''],
      [UserUpdateFieldEnum.SOBRENOME]: [''],
      [UserUpdateFieldEnum.IDADE]: [''],
    });
  }

  onCancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  onSubmit() {
    this.values = Object.assign({}, this.form.value);
    console.warn('this is the submit values: ', this.values);
  }
}
