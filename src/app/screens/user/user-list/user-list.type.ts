import { USER_PATH } from '../user.routing';

export type UserListType = Record<
  'id' | 'firstName' | 'lastName' | 'age',
  string
>;

export type UserPathType = keyof typeof USER_PATH;
