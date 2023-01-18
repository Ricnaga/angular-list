import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TodoCreateFieldEnum } from './todo-create-field.enum';

@Component({
  selector: 'lab-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
})
export class TodoCreateComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: TodoCreateFieldEnum.TITULO,
      type: 'input',
      props: {
        appearance: 'outline',
        label: 'Título',
        placeholder: 'Informe o título',
        required: true,
      },
    },
    {
      key: TodoCreateFieldEnum.DESCRICAO,
      type: 'input',
      props: {
        appearance: 'outline',
        label: 'Descrição',
        placeholder: 'Informe o descrição',
        required: true,
      },
    },
    {
      key: TodoCreateFieldEnum.OBSERVACAO,
      type: 'input',
      props: {
        appearance: 'outline',
        label: 'Observação',
        placeholder: 'Informe a observação',
        required: true,
      },
    },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
