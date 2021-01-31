import theme from '@styles/Theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Load = styled.ActivityIndicator.attrs({
  color: theme.colors.primary,
  size: 'large',
})`
  z-index: 1100;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  color: ${theme.colors.primary};
`;
