import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './Navigators/App';

const Routes: React.FC = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default Routes;
