import { Text } from '@components/typography';
import theme from '@styles/Theme';
import HTML from 'react-native-render-html';
import styled from 'styled-components/native';

export const Wrapper = styled.View``;

export const Title = styled(Text)`
  text-align: center;
  margin-bottom: 8px;
  font-size: 26px;
  color: ${theme.colors.midGrey};
  text-transform: uppercase;
`;

export const Body = styled(HTML)`
  margin-top: 16px;
  font-size: 16px;
`;

export const SeeMore = styled(Text)`
  text-align: center;
  font-size: 15px;
  color: ${theme.colors.white};
  border-bottom-width: 1.5px;
  border-color: ${theme.colors.secondary};
  padding-bottom: 4px;
`;
