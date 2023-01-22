import { User } from './base-storage.interface';

enum Key {
  NAME = '@ANGULAR_CRUD_KEY',
}

export abstract class BaseStorageService {
  protected key = Key.NAME;

  abstract getUser(): User | null;
  abstract setUser(params: User): void;
  abstract removeUser(): void;
  abstract clearUser(): void;
}
