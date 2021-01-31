/* eslint-disable prettier/prettier */
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

type TextProps = {
  weight:
  | 'Light'
  | 'Regular'
  | 'Medium'
  | 'Bold'
  | 'LightItalic'
  | 'MediumItalic'
  | 'BoldItalic'
  | 'Italic';
  fontSize: number;
  color: string;
};

export const TextComponent = styled.Text<TextProps>`
  font-family: ${({ weight }) => {
    switch (weight) {
      case 'Light':
        return 'Montserrat-Light';
      case 'Medium':
        return 'Montserrat-Medium';
      case 'Bold':
        return 'Montserrat-Bold';
      case 'LightItalic':
        return 'Montserrat-LightItalic';
      case 'MediumItalic':
        return 'Montserrat-MediumItalic';
      case 'BoldItalic':
        return 'Montserrat-BoldItalic';
      case 'Italic':
        return 'Montserrat-Italic';
      default:
        return 'Montserrat-Regular';
    }
  }};
  color: ${props => props.color};
  font-size: ${props => props.fontSize}px;
`;
