import { TodoValue } from './todo.enum';

export type ITodo = Record<
  TodoValue.TITLE | TodoValue.DESCRIPTION | TodoValue.REMARKS,
  string
>;
