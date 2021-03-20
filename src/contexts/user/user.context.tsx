import React, { useContext, useState } from 'react';
import { User, UserProviderProps, UserStateProps } from './user.types';

const UserContext = React.createContext<UserStateProps>({
  user: null,
  setUser: () => {},
});

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: '',
    username: '',
    email: '',
    phoneNumber: '',
    image: '',
    birthday: '',
  });

  const value: UserStateProps = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };
