import { IFieldBaseModel } from './field-base.interface';

export class FieldBaseModel<T> implements IFieldBaseModel<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  className: string;
  type: string;
  placeholder: string;
  options: Record<'value' | 'key', string>[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      className?: string;
      type?: string;
      placeholder?: string;
      options?: Record<'value' | 'key', string>[];
    } = {},
  ) {
    this.value = options.value;
    this.key = options.key ?? '';
    this.label = options.label ?? '';
    this.className = options.className ?? '';
    this.placeholder = options.placeholder ?? '';
    this.required = !!options.required;
    this.order = options.order ?? 1;
    this.controlType = options.controlType ?? '';
    this.type = options.type ?? '';
    this.options = options.options ?? [];
  }
}
