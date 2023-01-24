import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TODO } from 'src/app/application/routes';
import { TodoCreateApiService } from './todo-create-api.service';
import {
  TodoCreateFieldEnum,
  TodoCreateValues,
} from './todo-create-field.enum';

@Component({
  selector: 'lab-todo-create',
  templateUrl: './todo-create.component.html',
})
export class TodoCreateComponent {
  form = new FormGroup({});
  model = {};
  values!: TodoCreateValues;
  fields: FormlyFieldConfig[] = [
    {
      key: TodoCreateFieldEnum.TITLE,
      type: 'input',
      props: {
        appearance: 'outline',
        label: 'Title',
        placeholder: 'insert a title',
        required: true,
      },
    },
    {
      key: TodoCreateFieldEnum.DESCRIPTION,
      type: 'textarea',
      props: {
        appearance: 'outline',
        label: 'Description',
        placeholder: 'insert a description',
        required: true,
      },
    },
    {
      key: TodoCreateFieldEnum.REMARKS,
      type: 'input',
      props: {
        appearance: 'outline',
        label: 'Remarks',
        placeholder: 'insert a Remarks',
        required: true,
      },
    },
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoCreateApiService: TodoCreateApiService,
  ) {}

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit() {
    this.values = Object.assign({}, this.form.value as TodoCreateValues);

    this.todoCreateApiService
      .post(this.values)
      .subscribe(() => this.router.navigate([TODO]));
  }
}
