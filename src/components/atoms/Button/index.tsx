import { Text } from '@components/typography';
import theme from '@styles/Theme';
import React from 'react';

import * as S from './styles';

type ButtonProps = {
  children: React.ReactNode;
  actionOnPress: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  actionOnPress,
  disabled = false,
}) => {
  return (
    <S.Wrapper disabled={disabled} onPress={actionOnPress}>
      <Text fontSize={14} color={theme.colors.white} weight="Medium">
        {children}
      </Text>
    </S.Wrapper>
  );
};

export default Button;
