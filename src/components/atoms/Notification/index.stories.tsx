import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { View } from 'react-native';
import Notification from './index';

const profilePictureStories = storiesOf('Notification', module);

profilePictureStories.add('No Notification', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Notification />
  </View>
));

profilePictureStories.add('With Notifications', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Notification hasNotification />
  </View>
));
