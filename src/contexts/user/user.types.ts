import { ReactNode } from 'react';

export type User = {
  id?: string | number;
  username?: string;
  email?: string;
  phoneNumber?: string;
  image?: string;
  birthday?: string;
} | null;

export type UserProviderProps = {
  children: ReactNode;
};

export type UserStateProps = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};
