import React from 'react';

import { StyleSheet, Text } from 'react-native';
import theme from '@styles/Theme';

type DefaultTitleProps = {
  children: React.ReactNode;
};

const DefaultTitle: React.FC<DefaultTitleProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#ffffff',
    textShadowColor: theme.colors.secondary,
    textShadowOffset: { width: 1.5, height: 1.5 },
    textShadowRadius: 1,
  },
});

export default DefaultTitle;
