import React from 'react';
import { theme } from '@styles/Theme';

import * as S from './styles';

type TextProps = {
  children: React.ReactNode;
  weight?: 'Light' | 'Regular' | 'Medium' | 'Bold';
  fontSize?: number;
  color?: string;
};

const Text: React.FC<TextProps> = ({
  children,
  weight = 'Regular',
  fontSize = 12,
  color = theme.colors.lightGrey,
}) => {
  return (
    <S.TextComponent color={color} fontSize={fontSize} weight={weight}>
      {children}
    </S.TextComponent>
  );
};

export default Text;
