import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomBar from './BottomBar';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: '#FFFFFF' },
};

const App: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Media" component={BottomBar} />
      <Stack.Screen name="Devotional" component={BottomBar} />
      <Stack.Screen name="Home" component={BottomBar} />
      <Stack.Screen name="Schedule" component={BottomBar} />
      <Stack.Screen name="More" component={BottomBar} />
    </Stack.Navigator>
  );
};

export default App;
