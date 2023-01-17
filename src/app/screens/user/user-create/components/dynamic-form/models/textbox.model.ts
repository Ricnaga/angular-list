import { FieldBaseModel } from './field-base.model';

export class TextboxModel extends FieldBaseModel<string> {
  override controlType = 'textbox';
}
