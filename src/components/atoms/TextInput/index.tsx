import React from 'react';

import { TextInputProps } from 'react-native';
import * as S from './styles';

interface TextInputInterface extends TextInputProps {
  value: string;
  setValue: (val: string) => void;
}

const TextInput: React.FC<TextInputInterface> = ({
  value,
  setValue,
  ...props
}) => {
  return (
    <S.Wrapper>
      <S.TextInputComponent
        value={value}
        onChangeText={text => setValue(text)}
        {...props}
      />
    </S.Wrapper>
  );
};

export default TextInput;
