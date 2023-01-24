import { TodoDeleteFieldEnum } from './todo-delete-field.enum';

export type TodoDeleteType = Record<'title' | 'description', string>;

export type ITodoDeleteGeytByIdResponse = Record<
  | TodoDeleteFieldEnum.TITLE
  | TodoDeleteFieldEnum.DESCRIPTION
  | TodoDeleteFieldEnum.REMARKS,
  string
>;

export type ITodoDeleteResponse = Record<'id', string>;
