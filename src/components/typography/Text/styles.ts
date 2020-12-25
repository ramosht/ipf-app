import { NativeViewGestureHandler } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

type TextProps = {
  weight: 'Light' | 'Regular' | 'Medium' | 'Bold';
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
      default:
        return 'Montserrat-Regular';
    }
  }};
  color: ${props => props.color};
  font-size: ${props => props.fontSize}px;
`;
