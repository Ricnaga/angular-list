import { TODO_PATH } from '../todo.routing';

export type TodoListType = Record<
  'id' | 'title' | 'description' | 'remarks',
  string
>;

export type TodoPathType = keyof typeof TODO_PATH;
export type TodoColumnKey = Array<keyof TodoListType | 'actions'>;
