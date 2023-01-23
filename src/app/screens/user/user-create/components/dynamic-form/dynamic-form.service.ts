import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldBaseModel } from './models/field-base.model';
import { TextboxModel } from './models/textbox.model';
import { UserCreateFieldEnum } from './user-create-field.enum';

interface FormGroupObject<T> {
  [key: string]: FormControl<T | null>;
}

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  toFormGroup(): FormGroup<FormGroupObject<string>> {
    const group: FormGroupObject<string> = {};

    this.fields.forEach((field) => {
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
        key: UserCreateFieldEnum.FIRSTNAME,
        label: 'First Name',
        placeholder: 'Insert a first name',
        className: 'content__input__field',
        required: true,
        order: 1,
      }),
      new TextboxModel({
        key: UserCreateFieldEnum.LASTNAME,
        label: 'Last Name',
        placeholder: 'Insert a last name',
        className: 'content__input__field',
        required: true,
        order: 1,
      }),
      new TextboxModel({
        key: UserCreateFieldEnum.AGE,
        label: 'Age',
        placeholder: 'Insert an Age',
        className: 'content__input__field',
        required: true,
        order: 1,
      }),
    ].sort((a, b) => a.order - b.order);
  }
}
