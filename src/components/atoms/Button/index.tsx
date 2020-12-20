import React from 'react';

import { TouchableOpacity, Text } from 'react-native';

type ButtonProps = {
  children: React.ReactNode;
  actionOnPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, actionOnPress }) => (
  <TouchableOpacity onPress={actionOnPress}>
    <Text>{children}</Text>
  </TouchableOpacity>
);

export default Button;
