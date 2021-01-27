import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '@components/pages/Authentication/Login';
import Signup from '@pages/Signup';
import RecoverPassword from '@components/pages/Authentication/RecoverPassword';
import ConfirmCode from '@pages/ConfirmCode';
import Username from '@pages/Authentication/Username';
import Cellphone from '@pages/Authentication/Cellphone';
import Password from '@pages/Authentication/Password';
import NewPassword from '@pages/Authentication/NewPassword';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Auth: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
      <Stack.Screen name="ConfirmCode" component={ConfirmCode} />
      <Stack.Screen name="Username" component={Username} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    </Stack.Navigator>
  );
};

export default Auth;
