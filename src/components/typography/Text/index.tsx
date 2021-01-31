/* eslint-disable prettier/prettier */
import React from 'react';
import { theme } from '@styles/Theme';

import * as S from './styles';

type TextProps = {
  children: React.ReactNode;
  weight?:
  | 'Light'
  | 'Regular'
  | 'Medium'
  | 'Bold'
  | 'LightItalic'
  | 'MediumItalic'
  | 'BoldItalic'
  | 'Italic';
  fontSize?: number;
  color?: string;
  style?: any;
};

const Text: React.FC<TextProps> = ({
  children,
  weight = 'Regular',
  fontSize = 12,
  color = theme.colors.lightGrey,
  style,
}) => {
  return (
    <S.TextComponent
      style={style}
      color={color}
      fontSize={fontSize}
      weight={weight}
    >
      {children}
    </S.TextComponent>
  );
};

export default Text;
