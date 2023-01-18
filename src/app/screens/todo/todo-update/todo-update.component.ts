import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TodoUpdateFieldEnum } from './todo-update-field.enum';

@Component({
  selector: 'lab-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.scss'],
})
export class TodoUpdateComponent {
  form: FormGroup;
  model: Record<symbol, symbol>;
  fields: FormlyFieldConfig[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({});
    this.model = {};
    this.fields = [
      {
        key: TodoUpdateFieldEnum.TITULO,
        type: 'input',
        props: {
          appearance: 'outline',
          label: 'Título',
          placeholder: 'Informe o título',
          required: true,
        },
      },
      {
        key: TodoUpdateFieldEnum.DESCRICAO,
        type: 'input',
        props: {
          appearance: 'outline',
          label: 'Descrição',
          placeholder: 'Informe o descrição',
          required: true,
        },
      },
      {
        key: TodoUpdateFieldEnum.OBSERVACAO,
        type: 'input',
        props: {
          appearance: 'outline',
          label: 'Observação',
          placeholder: 'Informe a observação',
          required: true,
        },
      },
    ];
  }

  onCancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  onSubmit() {
    console.warn('this is the submit values: ', this.form.value);
  }
}
