export interface IFieldBaseModel<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  className: string;
  type: string;
  placeholder: string;
  options: Array<Record<'key' | 'value', string>>;
}
