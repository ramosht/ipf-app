import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomBar from './BottomBar';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomBar} />
    </Stack.Navigator>
  );
};

export default App;
