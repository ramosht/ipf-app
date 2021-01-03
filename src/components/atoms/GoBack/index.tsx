import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

type GoBackProps = {
  color?: string;
};

const GoBack: React.FC<GoBackProps> = ({ color }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <S.Icon color={color} name="keyboard-backspace" />
    </TouchableOpacity>
  );
};

export default GoBack;
