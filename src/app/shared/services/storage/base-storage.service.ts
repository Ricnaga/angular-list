enum Key {
  NAME = '@ANGULAR_CRUD_KEY',
}

export abstract class BaseStorageService {
  protected key = Key.NAME;

  abstract getToken(): string | null;
  abstract setToken(token: string): void;
  abstract removeToken(): void;
  abstract clearTokens(): void;
}
