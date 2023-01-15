import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';

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
      key: 'firstName',
      type: 'input',
      props: {
        appearance: 'outline',
        label: 'Nome',
        placeholder: 'Informe o nome',
        required: true,
      },
    },
    {
      key: 'lastName',
      type: 'input',
      props: {
        appearance: 'outline',
        label: 'Sobrenome',
        placeholder: 'Informe o sobrenome',
        required: true,
      },
    },
    {
      key: 'age',
      type: 'input',
      props: {
        appearance: 'outline',
        label: 'Idade',
        placeholder: 'Informe a idade',
        required: true,
      },
    },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
