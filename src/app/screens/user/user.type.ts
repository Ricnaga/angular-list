import { UserValue } from './user.enum';

export type IUserValue = Record<
  UserValue.FIRSTNAME | UserValue.LASTNAME | UserValue.AGE,
  string
>;
