import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { theme } from '@styles/Theme';

import { View } from 'react-native';
import Header from './index';

const logoHeaderStories = storiesOf('Header', module);

logoHeaderStories.add('Primary Header', () => <Header type="main" />);
logoHeaderStories.add('Header for Pages', () => (
  <View style={{ backgroundColor: theme.colors.primary, flex: 1 }}>
    <Header type="page" />
  </View>
));
logoHeaderStories.add('Header for Pages with Title', () => (
  <View style={{ backgroundColor: theme.colors.primary, flex: 1 }}>
    <Header type="page" title="Page Title" />
  </View>
));
logoHeaderStories.add('Header with Title and no GoBack', () => (
  <View style={{ backgroundColor: theme.colors.primary, flex: 1 }}>
    <Header type="page" title="Page Title" goBack={false} />
  </View>
));
