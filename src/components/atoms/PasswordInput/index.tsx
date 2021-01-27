import React, { useState } from 'react';

import { StyleSheet, TextInputProps, View } from 'react-native';
import { TextInput } from '@atoms/index';
import theme from '@styles/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as S from './styles';

interface PasswordInputProps extends TextInputProps {
  children?: React.ReactNode;
  value: string;
  wrapperStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  setValue: (val: string) => void;
  textAlign?: 'center';
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  children,
  value,
  setValue,
  wrapperStyle,
  inputStyle,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <S.Wrapper style={{ ...wrapperStyle }}>
      <TextInput
        value={value}
        setValue={setValue}
        secureTextEntry={!showPassword}
        {...props}
      >
        {children}
      </TextInput>
      <S.ToggleShowPassword onPress={() => setShowPassword(!showPassword)}>
        <Ionicons
          name={showPassword ? 'eye-off-outline' : 'eye-outline'}
          size={16}
          color={theme.colors.lightGrey}
        />
      </S.ToggleShowPassword>
    </S.Wrapper>
  );
};

export default PasswordInput;
