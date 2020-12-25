import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { View } from 'react-native';
import GoBack from './index';

const goBackStories = storiesOf('GoBack', module);

goBackStories.add('Default', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <GoBack />
  </View>
));
