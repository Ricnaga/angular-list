import { UserCreateFieldEnum } from './components/dynamic-form/user-create-field.enum';

export interface UserCreateField {
  firstName: string;
  lastName: string;
  age: string;
}

export type IUserCreateValue = Record<
  | UserCreateFieldEnum.FIRSTNAME
  | UserCreateFieldEnum.LASTNAME
  | UserCreateFieldEnum.AGE,
  string
>;

export type IUserCreateResponse = Record<'id', string>;
