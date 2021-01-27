import React, { useContext, useState } from 'react';
import {
  AuthenticationProviderProps,
  AuthenticationStateProps,
} from './authentication.types';

const AuthenticationContext = React.createContext<AuthenticationStateProps>({
  userIsAuthenticated: false,
  setUserIsAuthenticated: () => { },
});

const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({
  children,
}) => {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState<boolean>(
    false,
  );

  const value: AuthenticationStateProps = {
    userIsAuthenticated,
    setUserIsAuthenticated,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

const useAuthentication = () => {
  return useContext(AuthenticationContext);
};

export { AuthenticationProvider, useAuthentication };
