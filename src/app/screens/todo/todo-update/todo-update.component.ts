import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TODO } from 'src/app/application/routes';
import { TodoUpdateApiService } from './todo-update-api.service';
import { TodoUpdateFieldEnum } from './todo-update-field.enum';
import { ITodoUpdateValue } from './todo-update-field.type';

@Component({
  selector: 'lab-todo-update',
  templateUrl: './todo-update.component.html',
})
export class TodoUpdateComponent implements OnInit {
  form: FormGroup;
  model: Record<symbol, symbol>;
  fields: FormlyFieldConfig[];
  paramId: string;
  values!: ITodoUpdateValue;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoUpdateApiService: TodoUpdateApiService,
  ) {
    this.paramId = this.route.snapshot.paramMap.get('id') ?? '';
    this.form = new FormGroup({});
    this.model = {};
    this.fields = [
      {
        key: TodoUpdateFieldEnum.TITLE,
        type: 'input',
        props: {
          appearance: 'outline',
          label: 'Title',
          placeholder: 'insert a title',
          required: true,
        },
      },
      {
        key: TodoUpdateFieldEnum.DESCRIPTION,
        type: 'textarea',
        props: {
          appearance: 'outline',
          label: 'Description',
          placeholder: 'insert a description',
          required: true,
        },
      },
      {
        key: TodoUpdateFieldEnum.REMARKS,
        type: 'input',
        props: {
          appearance: 'outline',
          label: 'Remarks',
          placeholder: 'insert a Remarks',
          required: true,
        },
      },
    ];
  }

  ngOnInit(): void {
    this.todoUpdateApiService
      .getById(this.paramId)
      .subscribe((response) => this.form.patchValue(response));
  }

  onCancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  onSubmit() {
    this.values = Object.assign({}, this.form.value as ITodoUpdateValue);
    this.todoUpdateApiService
      .update(this.paramId, this.values)
      .subscribe(() => this.router.navigate([TODO]));
  }
}
