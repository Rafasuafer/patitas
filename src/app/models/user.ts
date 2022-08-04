export class User {
  id!: number;
  name?: string;
  email?: string;
  phone?: string;
  type?: UserType;

  constructor() {}
}

// userTYpe enum
export enum UserType {
  PERSON = 0,
  SHELTER = 1,
}
