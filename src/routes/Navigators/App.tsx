import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AboutUs from '@pages/Igreja';
import Ministries from '@components/pages/Ministries';
import Projects from '@pages/Projects';
import PrayerRequests from '@components/pages/PrayerRequests';
import Contribution from '@components/pages/Contribution';
import Post from '@pages/Post';
import Profile from '@pages/Profile';
import Notifications from '@pages/Notifications';
import EventInfo from '@pages/EventInfo';
import { NotificationsProvider } from '../../contexts/notifications/notifications.context';
import BottomBar from './BottomBar';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: '#FFFFFF' },
};

const App: React.FC = () => {
  return (
    <NotificationsProvider>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Media" component={BottomBar} />
        <Stack.Screen name="Devotional" component={BottomBar} />
        <Stack.Screen name="Home" component={BottomBar} />
        <Stack.Screen name="Schedule" component={BottomBar} />
        <Stack.Screen name="More" component={BottomBar} />

        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Ministries" component={Ministries} />
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="PrayerRequests" component={PrayerRequests} />
        <Stack.Screen name="Contribution" component={Contribution} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="EventInfo" component={EventInfo} />

        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
    </NotificationsProvider>
  );
};

export default App;
