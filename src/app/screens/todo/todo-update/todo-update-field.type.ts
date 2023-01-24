import { TodoUpdateFieldEnum } from './todo-update-field.enum';

export type ITodoUpdateValue = Record<
  | TodoUpdateFieldEnum.TITLE
  | TodoUpdateFieldEnum.DESCRIPTION
  | TodoUpdateFieldEnum.REMARKS,
  string
>;

export type ITodoUpdateResponse = Record<'id', string>;
