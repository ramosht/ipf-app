import React, { useContext, useState } from 'react';
import { User, UserProviderProps, UserStateProps } from './user.types';

const UserContext = React.createContext<UserStateProps>({
  user: null,
  setUser: () => {},
});

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: '876405cb-7e11-4e79-b760-3639d3a4eb80',
    username: 'Guilherme Ramos',
    email: 'guilhermeht.ramos@gmail.com',
    phoneNumber: '15981376104',
    image:
      'https://instagram.fsod2-1.fna.fbcdn.net/v/t51.2885-15/e35/134725762_401789460910085_5215578327472946775_n.jpg?_nc_ht=instagram.fsod2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Wx_XYCn8zmMAX-10jTW&tp=1&oh=2e555d26a01895fb7a4352f4caa095fe&oe=603AAA1E',
    birthday: '1998-02-09',
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
