import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Igreja from '@pages/Igreja';
import Ministerios from '@pages/Ministerios';
import Projetos from '@pages/Projetos';
import PedidosDeOracao from '@pages/PedidosDeOracao';
import Contribuicao from '@pages/Contribuicao';
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

      <Stack.Screen name="Igreja" component={Igreja} />
      <Stack.Screen name="Ministerios" component={Ministerios} />
      <Stack.Screen name="Projetos" component={Projetos} />
      <Stack.Screen name="PedidosDeOracao" component={PedidosDeOracao} />
      <Stack.Screen name="Contribuicao" component={Contribuicao} />
    </Stack.Navigator>
  );
};

export default App;
