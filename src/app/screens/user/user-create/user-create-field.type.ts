import { UserCreateFieldEnum } from './components/dynamic-form/user-createupdate-field.enum';

export interface UserCreateField {
  nome: string;
  sobrenome: string;
  idade: string;
}

export type IUserCreateValue = Record<
  | UserCreateFieldEnum.NOME
  | UserCreateFieldEnum.SOBRENOME
  | UserCreateFieldEnum.IDADE,
  string
>;
