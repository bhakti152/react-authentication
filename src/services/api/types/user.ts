import { FileEntity } from "./file-entity";
import { Role } from "./role";

export enum UserProviderEnum {
  EMAIL = "email",
}

export type User = {
  id: number | string;
  email: string;
  firstName?: string;
  lastName?: string;
  photo?: FileEntity;
  provider?: UserProviderEnum;
  role?: Role;
};
