export interface IUser {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUserUpdate{
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUserCreate {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  created_at: Date;
  updated_at: Date;
}
