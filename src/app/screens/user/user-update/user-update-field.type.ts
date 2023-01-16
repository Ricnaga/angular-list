import { UserUpdateFieldEnum } from './user-update-field.enum';

export interface IUserUpdateField {
  label: string;
  placeholder: string;
  formControlName: UserUpdateFieldEnum;
}

export type IUserUpdateValue = Record<
  | UserUpdateFieldEnum.NOME
  | UserUpdateFieldEnum.SOBRENOME
  | UserUpdateFieldEnum.IDADE,
  string
>;
