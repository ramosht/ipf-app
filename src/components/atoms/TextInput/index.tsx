import theme from '@styles/Theme';
import React from 'react';

import { StyleSheet, TextInputProps } from 'react-native';
import * as S from './styles';

interface TextInputInterface extends TextInputProps {
  value: string;
  setValue: (val: string) => void;
  wrapperStyle?: Object;
  inputStyle?: Object;
  placeholder?: string | undefined;
  editable?: boolean;
}

const TextInput: React.FC<TextInputInterface> = ({
  value,
  setValue,
  wrapperStyle,
  inputStyle,
  placeholder,
  editable,
  ...props
}) => {
  return (
    <S.Wrapper style={wrapperStyle} editable={editable}>
      <S.TextInputComponent
        value={value}
        onChangeText={(text) => setValue(text)}
        style={inputStyle}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.lightGrey}
        editable={editable}
        {...props}
      />
    </S.Wrapper>
  );
};

export default TextInput;
