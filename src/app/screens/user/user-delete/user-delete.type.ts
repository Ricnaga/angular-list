import { UserDeleteFieldEnum } from './user-delete-field.enum';

export type UserDeleteList = {
  title: string;
  description: string;
};

export type IUserDeleteGeytByIdResponse = Record<
  | UserDeleteFieldEnum.FIRSTNAME
  | UserDeleteFieldEnum.LASTNAME
  | UserDeleteFieldEnum.AGE,
  string
>;

export type IUserDeleteResponse = Record<'id', string>;
