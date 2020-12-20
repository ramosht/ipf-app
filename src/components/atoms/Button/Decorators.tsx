import React from 'react';
import { StoryFn } from '@storybook/addons';
import { View } from 'react-native';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const BufferView = (storyFn: StoryFn) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {storyFn}
  </View>
);
