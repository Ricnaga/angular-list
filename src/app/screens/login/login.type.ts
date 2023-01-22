import { LoginEnum } from './login.enum';

export type ILoginValue = Record<LoginEnum.EMAIL | LoginEnum.PASSWORD, string>;
export type ILoginResponse = Record<'accessToken', string>;
