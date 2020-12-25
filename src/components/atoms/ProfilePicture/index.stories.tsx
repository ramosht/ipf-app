import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { View } from 'react-native';
import ProfilePicture from './index';

const profilePictureStories = storiesOf('ProfilePicture', module);

profilePictureStories.add('Default', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ProfilePicture />
  </View>
));
