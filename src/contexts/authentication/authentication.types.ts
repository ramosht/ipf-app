import { ReactNode } from 'react';

export type AuthenticationProviderProps = {
  children: ReactNode;
};

export type AuthenticationStateProps = {
  userIsAuthenticated: boolean;
  setUserIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};
