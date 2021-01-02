import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { View } from 'react-native';
import PostPreview from './index';

const postPreviewStories = storiesOf('Molecule: Post Preview', module);

postPreviewStories.add('default', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <PostPreview />
  </View>
));
