import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { USERS } from 'src/app/application/routes';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { IUserValue } from '../user.type';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormService } from './components/dynamic-form/dynamic-form.service';
import { FieldBaseModel } from './components/dynamic-form/models/field-base.model';
import { UserCreateApiService } from './services/user-create-api.service';
import { UserCreateValidationService } from './services/user-create-validation.service';

@Component({
  selector: 'lab-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    ComponentsModule,
    DynamicFormComponent,
  ],
})
export class UserCreateComponent {
  form: FormGroup;
  fields: Array<FieldBaseModel<string>> | null;
  values!: IUserValue;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dynamicFormService: DynamicFormService,
    private userCreateValidationService: UserCreateValidationService,
    private userCreateApiService: UserCreateApiService,
  ) {
    this.fields = this.dynamicFormService.fields;
    this.form = this.dynamicFormService.toFormGroup();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit() {
    if (this.userCreateValidationService.getValidations(this.form)) return;

    this.values = Object.assign({}, this.form.value);

    this.userCreateApiService
      .post(this.values)
      .subscribe(() => this.router.navigate([USERS]));
  }
}
