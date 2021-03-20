import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthentication } from '../contexts/authentication/authentication.context';
import AppNavigator from './Navigators/App';
import AuthNavigator from './Navigators/Auth';

const Routes: React.FC = () => {
  const { userIsAuthenticated } = useAuthentication();
  const { setUserIsAuthenticated } = useAuthentication();

  useEffect(() => {
    const startApplication = async () => {
      const token = await AsyncStorage.getItem('@IPF:token');
      const userIsAuthenticatedStorage = await AsyncStorage.getItem(
        '@IPF:userIsAuthenticated'
      );

      if (!token || !userIsAuthenticatedStorage) {
        AsyncStorage.removeItem('@IPF:token');
        AsyncStorage.removeItem('@IPF:userIsAuthenticated');
        setUserIsAuthenticated(false);
      } else {
        setUserIsAuthenticated(true);
      }
    };

    startApplication();
  }, [setUserIsAuthenticated]);

  return (
    <NavigationContainer>
      {userIsAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Routes;
