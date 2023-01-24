import { UserUpdateFieldEnum } from './user-update-field.enum';

export interface IUserUpdateField {
  label: string;
  placeholder: string;
  formControlName: UserUpdateFieldEnum;
}

export type IUserUpdateValue = Record<
  | UserUpdateFieldEnum.FIRSTNAME
  | UserUpdateFieldEnum.LASTNAME
  | UserUpdateFieldEnum.AGE,
  string
>;

export type IUserUpdateResponse = Record<'id', string>;
