import { TODO_PATH } from '../todo.routing';

export type TodoListType = Record<
  'id' | 'firstName' | 'lastName' | 'age',
  string
>;

export type TodoPathType = keyof typeof TODO_PATH;
