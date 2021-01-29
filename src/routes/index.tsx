import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuthentication } from '../contexts/authentication/authentication.context';
import AppNavigator from './Navigators/App';
import AuthNavigator from './Navigators/Auth';

const Routes: React.FC = () => {
  const { userIsAuthenticated } = useAuthentication();
  return (
    <NavigationContainer>
      <AppNavigator />
      {/* {userIsAuthenticated ? <AppNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
};

export default Routes;
