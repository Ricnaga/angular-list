import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormService } from './components/dynamic-form/dynamic-form.service';
import { FieldBaseModel } from './components/dynamic-form/models/field-base.model';

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
  values!: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dynamicFormService: DynamicFormService,
  ) {
    this.fields = this.dynamicFormService.fields;
    this.form = this.dynamicFormService.toFormGroup(
      this.dynamicFormService.fields,
    );
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit() {
    this.values = Object.assign({}, this.form.value);
    console.warn('this is the submit values: ', this.form.value);
  }
}
