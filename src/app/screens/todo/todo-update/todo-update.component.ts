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
        key: TodoUpdateFieldEnum.NOME,
        type: 'input',
        props: {
          appearance: 'outline',
          label: 'Nome',
          placeholder: 'Informe o nome',
          required: true,
        },
      },
      {
        key: TodoUpdateFieldEnum.SOBRENOME,
        type: 'input',
        props: {
          appearance: 'outline',
          label: 'Sobrenome',
          placeholder: 'Informe o sobrenome',
          required: true,
        },
      },
      {
        key: TodoUpdateFieldEnum.IDADE,
        type: 'input',
        props: {
          appearance: 'outline',
          label: 'Idade',
          placeholder: 'Informe a idade',
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
