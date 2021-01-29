import { ReactNode } from 'react';

export type User = {
  id: string;
  username: string;
  email: string;
  phoneNumber: string;
  image: string;
  birthday: string;
} | null;

export type UserProviderProps = {
  children: ReactNode;
};

export type UserStateProps = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};
