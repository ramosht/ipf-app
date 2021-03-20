import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useState } from 'react';
import { useUser } from '../user/user.context';
import {
  AuthenticationProviderProps,
  AuthenticationStateProps,
} from './authentication.types';

const AuthenticationContext = React.createContext<AuthenticationStateProps>({
  userIsAuthenticated: false,
  setUserIsAuthenticated: () => {},
});

const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({
  children,
}) => {
  const { setUser } = useUser();

  const [userIsAuthenticated, setUserIsAuthenticated] = useState<boolean>(
    false
  );

  const handleLogout = () => {
    setUser(null);
    setUserIsAuthenticated(false);
    setUserIsAuthenticated(false);
    AsyncStorage.removeItem('@IPF:token');
    AsyncStorage.removeItem('@IPF:userIsAuthenticated');
  };

  const value: AuthenticationStateProps = {
    userIsAuthenticated,
    setUserIsAuthenticated,
    handleLogout,
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
