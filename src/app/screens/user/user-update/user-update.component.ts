import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserUpdateFieldEnum } from './user-update-field.enum';
import { IUserUpdateField, IUserUpdateValue } from './user-update-field.type';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@Component({
  selector: 'lab-user-update',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent implements OnInit {
  title: string;
  subtitle: string;
  form!: FormGroup;
  fields: Array<IUserUpdateField>;
  values!: IUserUpdateValue;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.title = 'Editar Usuário';
    this.subtitle = 'Edite as informações do usuário';
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
    this.values = { ...this.values, ...this.form.value };
    console.warn('this is the submit values: ', this.values);
  }
}
