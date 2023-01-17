import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldBaseModel } from './models/field-base.model';
import { TextboxModel } from './models/textbox.model';

interface FormGroupObject<T> {
  [key: string]: FormControl<T | null>;
}

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  toFormGroup(formFields: Array<FieldBaseModel<string>>) {
    const group: FormGroupObject<string> = {};

    formFields.forEach((field) => {
      group[field.key] = new FormControl(
        field.value ?? '',
        field.required ? Validators.required : null,
      );
    });
    return new FormGroup(group);
  }

  get fields(): Array<FieldBaseModel<string>> {
    return [
      new TextboxModel({
        key: 'nome',
        label: 'Nome',
        placeholder: 'Informe o nome',
        className: 'content__input__field',
        required: true,
        order: 1,
      }),
      new TextboxModel({
        key: 'sobrenome',
        label: 'Sobrenome',
        placeholder: 'Informe o sobrenome',
        className: 'content__input__field',
        required: true,
        order: 1,
      }),
      new TextboxModel({
        key: 'idade',
        label: 'Idade',
        placeholder: 'Informe a idade',
        className: 'content__input__field',
        required: true,
        order: 1,
      }),
    ].sort((a, b) => a.order - b.order);
  }
}
