import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { View } from 'react-native';
import LogoHeader from './index';

const logoHeaderStories = storiesOf('LogoHeader', module);

logoHeaderStories.add('Default', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <LogoHeader />
  </View>
));
