import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { View } from 'react-native';
import ScheduleItem from './index';

const logoHeaderStories = storiesOf('ScheduleItem', module);

logoHeaderStories.add('Schedule Item', () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
      maxWidth: 300,
      alignSelf: 'center',
    }}
  >
    <ScheduleItem />
  </View>
));
